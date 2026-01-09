#include<iostream>

using namespace std;

void primeNum(int n){
    for(int i = 2; i*i<=n; i++){
        if(n % i == 0){
            cout<<"Prime"<<endl;
            break;
        } 
    };
    cout<<"NotPrime"<<endl;
};

int main(){
    int num =11;
primeNum(num);
    return 0;
};