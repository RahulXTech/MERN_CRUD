
//=====================================================
//Solve the problem using recursion in code.
#include<iostream>
using namespace std;

unsigned int Fecto(int nums){
    if(nums == 1){
        return 1;
    };
    return nums * Fecto(nums - 1);
};
int main(){
    cout<<Fecto(6);

    return 0;
}



// #include<iostream>
// using namespace std;
// //Total range of unsign intenger data type is (0 to 65535) in positive number. It will be capture memory size 2 byte.
// unsigned int Fectorial( int num){
//     int result =1;
//     for(int i=1; i<=num; i++){
//         result = result * i;
//     }
//     return result;
// };

// int main(){
//     cout<<Fectorial(5);
//     return 0;
// }