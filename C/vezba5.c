#include <stdio.h>
#define PI 3.14
/*Саставити програм који за унети полупречник основице и висине ваљка исписује његову
површину и запремину. (Површина: P=2*r*π*(r+h) , Запремина: V=r2*
*π*h) */
int main(){
    double h,r,p,v;
    printf("Unesite visinu valjka:");
    scanf("%lf",&h);
    printf("unesite poluprecnik valjka:\n");
    scanf("%lf",&r);
    printf("Povrsina valjka iznosi:%lf\n",2*r*PI*(r+h));
    printf("Zapremina valjka iznosi:%lf\n",r*r*PI*h);

return 0;
}

