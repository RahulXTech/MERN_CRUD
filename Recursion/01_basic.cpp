#include<iostream>
#include<string>
using namespace std;

void Recursion(int n){
    
    if(n == 1){
        cout<<"1";
        return;
    }
    cout<<n;
    Recursion(n-1);
    
};

int main(){
Recursion(9);
return 0;
}