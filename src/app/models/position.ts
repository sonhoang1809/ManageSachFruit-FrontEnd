export interface Position {
    specificAddress: string;
    ward: Ward;
    district: District;
    city: City;
}
export interface City{
    ID: number;
    Title: string;
}
export interface District{
    ID: number;
    Title: string;
    TinhThanhID: number;
    TinhThanhTitle: string;
}
export interface Ward{
    ID: number;
    Title: string;
    TinhThanhID: number;
    TinhThanhTitle: string;
    QuanHuyenID: number;
    QuanHuyenTitle: string;
}