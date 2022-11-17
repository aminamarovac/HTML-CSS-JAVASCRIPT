#include<stdio.h>
int main(){
int n,h,m,s;
printf("n=");
scanf("%d",&n);
for(h=0; h<=23; h++)
    for(m=0;m<=59;m++)
    for(s=0; s<=59; s++)
    if(n==(h/10+h%10+m/10+m%10+s/10+s%10))
    printf("\n %d h \n %d m \n %d s",h,m,s);

return 0;
}
