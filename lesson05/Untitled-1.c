#include <stdio.h>
 

void ChuViHCN(int a, int b){

  int P;

  P = (a + b) * 2;
 
  printf("\nChu vi hình ch? nh?t là: %d",P);
}

void DienTichHCN(int a, int b){
  
  int S;
  
  S = a * b;
  
  printf("\nDi?n tích hình ch? nh?t là: %d",S);
}
 
int main(){
  
  int a, b;
  
  printf("Nh?p chi?u dài a: ");
  scanf("%d", &a);
  printf("Nh?p chi?u dài b: ");
  scanf("%d", &b);
  
  ChuViHCN(a, b);
  DienTichHCN(a, b);
   
  printf("\n-------------------------------\n");
  printf("Chuong trình này du?c dang t?i codehow.net");
  return 0;
}
