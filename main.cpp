#include <iostream>
int main() 
{
float a,b,c,e,total;
char op;
std::cin>>a>>op>>b;
switch(op)
{
    case'+':
    c=a+b;
    break;
    
    case'-':
    c=a-b;
    break;
    
    case'*':
    c=a*b;
    break;
     
    case'/':
    c=a/b;
    break;
}
std::cout<<"="<<c<<std::endl;
total=c;
while(op!='q')
{
    std::cin>>op>>e;
    switch(op)
    {
   case'+':
   total+=e;
   break;
   
   case'-':
   total-=e;
   break;
   
    case'*':
    total*=e;
    break;
     
    case'/':
    total/=e;
    break;
    }
    std::cout<<"="<<total;
}
}
