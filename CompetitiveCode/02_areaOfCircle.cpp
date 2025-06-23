#include<iostream>
#include<iomanip>  // Required for setprecision decimal point.
#include<math.h>
#define PI 3.14159265   //==== It will be fixed value.

using namespace std;
float FindAreaOfCircle(float r){

    // return PI *(r * r);
    return PI * pow(r, 2);
};

int main(){
    cout<< fixed << setprecision(2);
    cout<< FindAreaOfCircle(10);
    return 0;
};