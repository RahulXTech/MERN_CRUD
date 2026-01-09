#include<iostream>
#include<string>
using namespace std;
PrimeNum(int num){
    if(num % 2 ==0){
        cout<<"It's not a prime number";
        return 1;
    }
    cout<<"It's a prime number";
    return 1;
    PrimeNum(num +1);
};
int main(){
    int input;
    cout<<"Please enter the number : ";
    cin>>input;
    PrimeNum(input);
    return 0;
}

