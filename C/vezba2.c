#include <stdio.h>
int main(){
   int a,b;
   printf("Unesite prvi broj:\n");
   scanf("%d",&a);
   printf("Unesite drugi broj:\n");
   scanf("%d",&b);
   printf("Zbir brojeva je:%d\n",a+b);
   printf("Razlika brojeva je :%d\n",a-b);
   printf("Proizvod brojeva je: %d\n",a*b);
   printf("Celobrojni kolicnik je: %d\n",a/b);
   printf("Realni kolicnik je : %f\n",(float)a/(float)b);
   printf("Ostatak je: %d",a%b);


return 0;
}
