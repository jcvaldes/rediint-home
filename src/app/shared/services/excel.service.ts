import { Injectable } from '@angular/core';
import * as FileSaver from 'file-saver';
import * as XLSX from 'sheetjs';
const EXCEL_TYPE =
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';
@Injectable()
export class ExcelService {
  constructor() {}
  public exportAsExcelFile(json: any[], excelFileName: string): void {
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json);

    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.sheet_set_range_style(ws, 'A1:M1', {
      fgColor: { rgb: '#152663' },
      color: { rgb: '#ffffff' },
      bold: true,
      // bottom: { style: 'medium', color: { rgb: '#000000' } },
    });
    if (!ws['!cols']) ws['!cols'] = [];
    const cols = [10, 12, 12, 20, 15, 15, 15, 20, 18, 15, 18, 15, 15];

    for (let c = 0; c < cols.length; c++) {
      ws['!cols'][c] = { wch: cols[c] };
    }

    ws['!ref'] = XLSX.utils.encode_range({
      s: { c: 0, r: 0 },
      e: { c: 12, r: 1 + json.length + 1 },
    });
    const fi = json.length + 2;

    ws[`A${fi}`] = { v: 'TOTAL' };
    ws[`E${fi}`] = { f: `SUM(E2:E${fi - 1})` };
    ws[`F${fi}`] = { f: `SUM(F2:F${fi - 1})` };
    ws[`G${fi}`] = { f: `SUM(G2:G${fi - 1})` };
    ws[`H${fi}`] = { f: `SUM(H2:H${fi - 1})` };
    ws[`I${fi}`] = { f: `SUM(I2:I${fi - 1})` };
    ws[`J${fi}`] = { f: `SUM(J2:J${fi - 1})` };
    ws[`K${fi}`] = { f: `SUM(K2:K${fi - 1})` };
    ws[`L${fi}`] = { f: `SUM(L2:L${fi - 1})` };
    ws[`M${fi}`] = { f: `SUM(M2:M${fi - 1})` };

    // ws['!cols'][0] = { wch: 15 };

    XLSX.utils.book_append_sheet(wb, ws, `${excelFileName}`);
    // XLSX.utils.book_append_sheet(workbook, worksheet, 'Libro1')

    this.writeAsExcelFile(wb, excelFileName);
  }
  // sin formateo
  private saveAsExcelFile(wb, buffer: any, fileName: string): void {
    const excelBuffer: any = XLSX.write(wb, {
      bookType: 'xlsx',
      type: 'array',
    });
    const data: Blob = new Blob([buffer], { type: EXCEL_TYPE });
    FileSaver.saveAs(data, fileName + EXCEL_EXTENSION);
  }
  // con formateo
  private writeAsExcelFile(wb, excelFileName: string): void {
    XLSX.writeFile(wb, `${excelFileName}.xlsx`, {
      cellStyles: true,
      bookImages: true,
    });
  }
}
