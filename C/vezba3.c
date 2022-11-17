// #include<stdio.h>
// int main(){
// printf("Goku voli \t c jezik.\n");
// printf("On vezbaa\b redovno.\n");
// printf("\"Goku\" voli i alarm\n");
// printf("Evo ga \a zvuk.\n");
// return 0;
// }

#include <stdio.h>
#define PI 3.14
int main(){
  double r;
  printf("Unesite poluprecnik kruga:\n");
  scanf("%lf",&r);
  printf("Obim kruga iznosi:%.3f",2*r*PI);
  printf("Povrsina kruga iznosi: %.3f",r*r*PI);
return 0;
}