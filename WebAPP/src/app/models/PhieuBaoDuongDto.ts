export class PhieuBaoDuongDto {
  id: number;
  ma: string;
  nhanVienId: number;
  trangThai: number | null;
  createTime: Date | null;
  tongThietBi: number | null;
  danhSachThietBi: number[];
}
