// #include<iostream>
// #include<string>

// using namespace std;

// int AllPrimeNum(int num){
//     if(num%2 == 0){
//         cout<<num<<endl;
//     };
//     if(num < 1){
//         return 0;
//     }
//     AllPrimeNum(num - 1);
//     return 0;
// };
// int main(){
//     int fist;
//     int second;
//     cout<<"Enter the first number : ";
//     cin>>fist;
//     cout<<"Enter the second number : ";
//     cin>>second;



//     AllPrimeNum(13);
// return 0;
// }

#include <iostream>
using namespace std;

// Function to check if a number is prime
bool isPrime(int num) {
    if (num <= 1) return false;
    for (int i = 2; i * i <= num; i++) {
        if (num % i == 0)
            return false;
    }
    return true;
}

int main() {
    int limit;

    // Step 1: Ask the user for a limit
    cout << "Enter a number: ";
    cin >> limit;

    // Step 2: Loop from 2 to limit and check primes
    cout << "Prime numbers up to " << limit << " are:\n";
    for (int i = 2; i <= limit; i++) {
        if (isPrime(i)) {
            cout << i << " ";
        }
    }

    cout << endl;
    return 0;
}
