//# Desafio da semana #2
//Nesse exercício, você está livre para escolher os nomes para suas variáveis e funções! :smile:
// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function soma(n1,n2){
    return n1+n2;
}
// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
var soma = soma(10,2)+5;
// Qual o valor atualizado dessa variável?
soma;//17
// Declare uma nova variável, sem valor.
var nvar;
/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
function valor(n){
    nvar = n;
    return("o valor da variavel agora é valor: "+nvar);
}
// Invoque a função criada acima.
valor(5);
// Qual o retorno da função? (Use comentários de bloco).
/*o valor da variavel agora é valor: 5*/
/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
function recebe(n1,n2,n3){
    if(n1 == null || n2 == null || n3 == null){
        return("Preencha todos os valores corretamente!");
    }
    return n1*n2*n3 + 2;
}
// Invoque a função criada acima, passando só dois números como argumento.
recebe(2,3);
// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
//Preencha todos os valores corretamente!
// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
recebe(2,3,4);
// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
//26
/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/
function tentativas(n1,n2,n3){
    if(n1 == null && n2 == null && n3 == null){
        return false;
    }else if(n1 != null && n2 == null && n3 == null){
        return("o valor do primeiro numero é: "+n1);
    }else if(n1 != null && n2 != null && n3 == null){
        return("a soma dos valores "+n1+" e "+n2+" é: "+(n1+n2));
    }else if(n1 != null && n2 != null && n3 != null){
        return("o resultado é: "+(n1+n2)/n3);
    }else{
        return null;
    }
}
