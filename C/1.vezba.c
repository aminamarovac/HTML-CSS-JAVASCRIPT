// #include<stdio.h>
// int main(){
// printf("Goku je poceo da uci %c.\n",'c');
// printf("On ima %.2f godina.\n",15.5);
// printf("On voli C %d.\n",1);
// return 0;
// }


#include<stdio.h>
int main(){
int h,m,s,q,h1,m1,s1;
printf("U koliko sati je krenuo:");
scanf("%d",&h);
printf("U koliko minuta je krenuo:");
scanf("%d",&m);
printf("U koliko sekundi je krenuo:");
scanf("%d",&s);
printf("Koliko sekundi je avion proveo u letu");
scanf("%d",&q);
int sek=h*3600+m*60+s+q;
h1=sek/3600;
m1=(sek%3600)/60;
s1=(sek%3600)%60;
if(h1>=24)h1-=24;
printf("Avion slece u %d:%d:%d",h1,m1,s1);
return 0;
}
