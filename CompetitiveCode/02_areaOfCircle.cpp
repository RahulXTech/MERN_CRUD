#include<iostream>
#define PI 3.14159265   //==== It will be fixed value.

using namespace std;
float FindAreaOfCircle(float r){
    return PI *(r * r);
};

int main(){
    cout<< FindAreaOfCircle(10);
    return 0;
};