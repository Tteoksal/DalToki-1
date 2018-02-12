TTeok
=====

TTeok(떡)은 HTML의 문법을 개량한 객체 지향 프로그래밍 페러다임을 가진 언어입니다.

---------------------------------------
  
## TTeok-2018 standard document

떡 언어의 2018년 표준 문서입니다.

#### 목차

1. 떡 언어란.
2. 표준안 제작 방식
3. 값과 타입
    1. 원시값과 타입
        1. 숫자 값
        2. 숫자 타입
        3. 문자 타입
        5. null 값
        6. null 타입
    2. 인공값과 타입
        1. 객체 값
        2. 객체 타입
        3. 클래스 타입
        4. 함수 타입
        5. 리스트 값
        6. 리스트 타입
4. 구문
    1. 식별자
    2. 리터럴
        1. 숫자 리터럴
        2. null 리터럴
        3. 객체 리터럴
        4. 문자 리터럴
        5. 문자열 리터럴
        6. 리스트 리터럴
    3. 컨테이너
        1. 속성
        2. 자식 컨테이너
5. 예외
    1. SyntaxException
    2. TypeException
    3. RuntimeException
6. Record
7. List
9. 추상 명령
10. 값 구현
11. 타입 구현
12. Execution context
14. 모듈 작성
15. 알고리즘
16. EBNF 표기

---------------------------------------

### 1 떡 언어란

떡 언어는 HTML의 문법으로 프로그래밍을 할 수는 없을까? 라는 
의문에서부터 시작된 프로젝트입니다.
플렛폼으로는 데스크탑/브라우저를 지원할 예정입니다.

---------------------------------------

### 2 표준안 제작 방식

떡의 표준안은 서재원(EnvironmentSet)과 전상완(maxswjeon)이 기획, 제작하였습니다.
표준안의 요청은 풀 리퀘스트를 통해 요청안을 제출하시면 다른 컨트리뷰터들과 충분한 협의 시간을 가진 후
표준안 위원회의 과반수 이상의 동의를 받으면 다음 표준(매년마다 발행)에 추가됩니다.

---------------------------------------

### 3 값과 타입

이 장에서는 떡 언어의 값과 타입에 대해 설명합니다.
떡 언어에서 값은 원시값과 인공값 두 종류가 있습니다.
원시값은 내부적으로 불변성를 띄는 값을 의미합니다. 이 값은 수정하려면 재 할당해야 합니다.
인공값은 내부적으로 가변성을 띄는 값을 의미합니다.
또한 타입은 값을 표현하는 방식입니다. 같은 값 1을 가지고 있는 변수라 할지라도 타입에 따라 다르게 표현됩니다.
초기화되지 않은 저장공간은 그 타입의 기본값을 값으로 갖습니다.
타입을 명시할 때에는 앞에 %가 붙습니다.
또한 인공값과 원시값은 자신과 같은 종류(인공,원시)의 타입인 변수에만 저장될 수 있습니다.

#### 3.i 원시값과 타입

원시값은 내부적으로 불변성를 띄는 값을 의미합니다. 이 값은 수정하려면 재 할당해야 합니다.
원시 타입은 원시값을 표현하는 형식입니다.
모든 원시 타입은 인공 타입으로 변환 시 TypeException이 발생합니다.

##### 3.i.a 숫자 값

떡에서, 숫자의 크기의 제한은 램의 한계입니다.
숫자 값은 담긴 변수의 타입이 명시되지 않았을 때, 숫자 타입을 가지게 만듭니다. 
숫자 값은 숫자 리터럴로 표현 가능합니다. 또한 숫자 리터럴은 10진수 표현만을 지원합니다.
    
    <var name = `number` type  = `%number` value = `123` />  
   
##### 3.i.b 숫자 타입

숫자 타입은 숫자 값을 표현하는 형식입니다.
값에 접근할 때 변수의 값을 숫자로 형 변환을 한 후 변수의 값으로서 전달해줍니다.

    <var name = `number` type = `%number`/> 
숫자 타입의 기본값은 0입니다.
##### 3.i.c 문자 타입

문자 타입은 문자 값을 표현하는 형식입니다.
값을 담은 변수의 타입을 문자로 바꾸면 값에 접근할 때 
변수의 값을 숫자로 형 변환을 한 후 ascii 코드에서 해당하는 문자를 변수의 값으로서 전달해줍니다.

    <var name = `char` type  = `%char`/>

문자 타입의 기본값은 빈 문자입니다.
##### 3.i.d null 값

null 값은 빈 값을 의미합니다. 읽기와 쓰기, 원시 타입으로의 변환 연산을 제외한 다른 연산을 시도하면 
TypeException 예외를 일으킵니다.
null 값은 담긴 변수의 타입이 명시되지 않았을 때, null 타입을 가지게 만듭니다.

     <var name = ` 'null' ` type  = `%null`/>

형 변환 연산 시 결과를 아래와 같습니다.

    숫자로의 타입 변환
    <%number args = `null` callback = `result`>
        <@print args = `result` /> // 0
    <%number/>
    
    문자로의 타입 변환
    <%char args = `null` callback = `result`>
        <@print args = `result` /> // '' 
    <%char/>
    
    null로의 타입 변환
    <%null args = `null` callback = `result`>
        <@print args = `result` /> // null 
    <%null/>
    
##### 3.1.e null 타입

null 타입은 빈 값을 표현하는 형식입니다.
변수의 값에 무엇이 들어있든 값에 접근할 때 null을 변수의 값으로서 전달해줍니다.
null 타입 의 기본값은 null입니다.

     <var type  = `%null`/>   

#### 3.ii 인공값과 타입

인공값은 내부적으로 가변성을 띄는 값을 의미합니다.
인공 타입은 인공값을 표현하는 형식입니다.
모든 인공 타입은 원시 타입으로 변환 시 TypeException이 발생합니다.

##### 3.ii.a 객체 값

이하 스펙에서 객체 값은 객체라 칭하겠습니다. 객체는 프로퍼티(속성)의 집합으로 프로퍼티는
이름과 값으로 구성되어 있습니다. 프로퍼티의 값으로는 떡의 값이 들어갈 수 있습니다. 
프로퍼티의 이름으로는 식별자만이 가능합니다. 또한 초기화되지 않은 객체의 요소는 그 타입의 기본값이 들어가게 됩니다.
객체는 담긴 변수의 타입이 명시되지 않았을 때, 객체 타입을 가지게 만듭니다.

    <var name = `object` type = `%object` property = `(x:%number, y:%number)` value = `(x : 1, y: 2)` />     

##### 3.ii.b 객체 타입

객체 타입은 객체를 표현하는 형식입니다.프로퍼티에 프로퍼티 이름을 통한 접근을 제공해줍니다.
접근 방식은 아래와 같습니다.

       <var name = `object` type = `%object` property = `(x:%number, y:%number)` value = `(x : 1, y: 2)` />    
       <var name = `x` type = `%number` value = `object->x` /> // x의 값은 1
   
객체 타입의 기본값은 빈 객체입니다.   
##### 3.ii.c 클래스 타입

클래스 타입은 객체의 원형을 정의하는 형식입니다.객체 값을 가진 변수의 타입을 클래스 타입으로 변환을 하면,
그 변수는 다른 객체를 생성할 때 객체지향 프로그래밍 페러다임에서의 부모 클래스로서 사용할 수 있습니다.
클래스 타입인 변수는 타입 변환과 읽기 연산
이외의 연산을 시도하면 TypeException 예외를 일으킵니다.


    <var name = `object` type = `%class` value = `(x:%number, y:%number)`/>    
    <var name = `object` type = `%object` form = `class` />
    
클래스 타입의 기본값은 빈 객체입니다.       
##### 3.ii.d 컨테이너 타입

컨테이너 타입은 객체를 호출 가능한 컨테이너로 취급하게 만듭니다.
컨테이너 타입의 기본값은 (@header : 'args = `` ', @body : '')인 객체 입니다.
    
    <var name = `function` type = `%function` /> 
     
컨테이너 타입은 감싸고 있는 객체의 @header 에 있는 값을 컨테이너의 속성으로, @body에 있는 값을 컨테이너의 몸체로 사용합니다.

     <var name = `object` type = `%object` property = `(@header : %string, @body : %string)` value = `(@header : 'args = `` ', @body : '<@print args=` 'hi' `   />' )` />    
     <%container args = `object` callback = `result`>
            <result args = `` /> // hi를 출력
     <%container/>
  
##### 3.ii.e 리스트 값

리스트 값(이하 리스트)은 열거 가능한 값들의 연속입니다. 값으로는 떡의 값이 들어갈 수 있습니다.
리스트는 담긴 변수의 타입이 명시되지 않았을 때, 리스트 타입을 가지게 만듭니다.

    <var name = `list` type = `%list` value = `[1,'hi',(x : %number),null,%function]` />

##### 3.ii.f 리스트 타입

리스트 타입은 리스트를 표현하는 형식입니다.
기본값은 빈 리스트 []입니다.

    <var type  = `%list`/> 

---------------------------------------    
### 4 구문 

#### 4.i 주석

주석은 구현체가 낱말 분석 단계에서 무시하는 줄을 의미합니다.
\# 뒤부터 줄의 끝 부분까지는 낱말 분석 단계에서 소스코드로 취급하지 않고 제거합니다.

#### 4.i 식별자

식별자는 알파벳과 숫자,%,@,_로 이루어진 문자들의 열입니다. 식별자의 제일 앞 문자는 무조건 
숫자가 아닌 유효한 문자여야 합니다.

EBNF 표기는 아래와 같습니다.
    
    alphabet ::= A-Za-z
    character ::= alphabet|@|_|%
    integer ::=  0|1|2|3|4|5|6|7|8|9
    identifier ::= character "{" character | integer "}"
    
#### 4.ii 리터럴
    
리터럴은 값을 문자로 표현하는 방식입니다.

##### 4.ii.a 숫자 리터럴

숫자 리터럴은 숫자 값을 문자로 표현하는 방식입니다.
10진수 표기법으로 표기한 숫자는 모두 숫자 리터럴로 간주됩니다..

    <var name = `num_literal` type = `%number` value = `1` />
    #여기서 1이 숫자 리터럴입니다.

EBNF 표기는 아래와 같습니다.

     integer ::=  0|1|2|3|4|5|6|7|8|9
     number ::= integer "[" .integer "]"
     
##### 4.ii.b null 리터럴

null 리터럴은 null 값을 문자로 표현하는 방식입니다.
아래와 같이 알파벳 n,u,l,l을 연속해서 사용한 것이 null 리터럴로 간주됩니다.

    <var name = `null_literal` type = `%null` value = `null` />
    #여기서 null이 null 리터럴입니다.    
    
##### 4.ii.c 객체 리터럴

객체 리터럴은 객체 값을 문자로 표현하는 방식입니다.
( 프로퍼티 이름 : 값 또는 타입, ... ) 형식으로 표현한 것은 객체 리터럴로 간주됩니다.

    <var name = `object_literal` type = `%object` value = `(x : 1, y : 2)` />
    #여기서 (x : 1, y : 2)이 객체 리터럴입니다.
    
EBNF 표기는 아래와 같습니다.

    type ::= %number | %char | %null | %object | %class | %function | %list
    value ::= object | number | null | list | string | char
    element ::= "[" identifier : "(" value | type ")" "]"
    elements ::= element "[" , element "]"
    object ::= ( "[" elements "]" )
    
##### 4.ii.d 문자 리터럴        

문자 리터럴은 문자 타입을 표현하는 방식입니다.
''로 둘러쌓인 UTF8에서 지원하는 문자는 문자 리터럴로 간주됩니다.
    
    <var name = `char_literal` type = `%char` value = ` 'A' ` />
    #여기서 A가 문자 리터럴입니다.
    #변수 A의 값은 A의 utf-8 인코딩 값인 41이 되고, 타입은 문자 타입이 됩니다.
    
EBNF 표기는 아래와 같습니다.

    char ::= ' "{" UTF8Char "}" '
    
##### 4.ii.e 문자열 리터럴

문자열 리터럴은 문자가 담긴 리스트를 문자로 표현하는 방식입니다.
"" 로 둘러쌓인 문자는 문자열 리터럴로 간주됩니다.

    <var name = `string_literal` type = `list` value = ` "Hello" ` />
    #여기서 Hello가 문자열 리터럴입니다.
    #NOTE : "Hello" 는 [ 'H', 'e', 'l', 'l', 'o' ] 와 같습니다.
    
EBNF 표기는 아래와 같습니다.

    string ::= " "{" UTF8Char "}" "
    
##### 4.ii.f 리스트 리터럴

리스트 리터럴은 리스트를 표현하는 방식입니다.
\[값 또는 타입, ...\] 형식으로 표현한 것은 리스트 리터럴로 간주됩니다.

    <var name = `list_literal` type = `list` value = `[ 1,%null,'A' ]` />
    #[ 1,%null,'A' ]이 리스트 리터럴입니다.
    
EBNF 표기는 아래와 같습니다.

    list ::= [ "[" elements "]" ]

#### 4.iii 컨테이너

컨테이너는 컨테이너 헤드와 컨테이너 바디, 컨테이너 테일 로 이루어져 있습니다.

    <container-head>
        #container-body
    <container-tail/>    
    
컨테이너 바디는 생략 가능합니다.

    <container-head>
    <container-tail/> 
    
또한 컨테이너 헤드와 컨테이너 tail 을 합칠 수 있습니다. 이를 싱글 컨테이너 라고 부릅니다.
이 경우에는 컨테이너 바디를 작성할 수 없습니다.

    <container-perfect />
각 컨테이너 바디는 자신의 렉시컬 스코프를 갖습니다.

    <container-head>
        <var name = `a` type = `number` />
    <container-tail/> // a의 수명이 끝나고 가비지 컬렉팅 대상이 되서 처리됨.
    #변수 a에 접근 불가능
    
EBNF 표기는 아래와 같습니다.
    
    option ::= identifier = ` value `
    options ::= option "{" , option "}"
    containerBody ::= "{" container "}"
    container ::= <identifier "[" options "]" "(" /> | > containerBody <identifier/> ")"
    NOTE : container 에서 <identifier 의 identifier와 <identifier/>의 identifier는 같아야 합니다. 

##### 4.iii.a 속성

속성은 특정 컨테이너의 특징, 상태 등을 기술하는 용도로 사용됩니다.
속성이름 = \`값\` 형식으로 기술합니다.
컨테이너 헤드에는 그 컨테이너의 속성을 기술할 수 있습니다.

    <container-head property1 = ` 123 ` />
    
EBNF 표기는 아래와 같습니다.

    option ::= identifier = ` value `
    options ::= option "{" , option "}"
    
##### 4.iii.b 자식 컨테이너

컨테이너 바디에는 다른 컨테이너들을 넣을 수 있습니다. 이 컨테이너들을 자식 컨테이너라고 부릅니다.
자식 컨테이너들은 부모 컨테이너의 일부입니다.

EBNF 표기는 아래와 같습니다.

    containerBody ::= "{" container "}"
   
---------------------------------------

### 5. 예외

예외는 구현체가 코드를 해석, 실행하는 도중에 발생하는 문제들을 안내하는 방식입니다.
예외가 발생하면, 구현체는 예외를 출력하고 모든 작업을 중지합니다.

#### 5.i SyntaxException

SyntaxException은 낱말 분석 및 구문 분석 도중 문법을 어긴 코드를 발견했을 때 발생하는 예외입니다.
이 예외를 출력할 때에는 <SyntaxException in \[문법을 어긴 줄\]:\[전체 코드에서의 줄\] \[에러 메시지\] > 형식으로 출력합니다.

#### 5.ii TypeException

TypeException는 실행 도중 타입에서 정의되지 않은 동작을 하였을 때 발생하는 예외입니다.
또한 property 속성으로 정의된 객체의 뼈대를 어겼을 때, 함수의 인자로 잘못된 타입의 변수를 주었을 떄,
원시값을 담은 변수에 인공 타입을 지정하거나, 인공 타입을 담은 변수에 원시값을 지정했을 때 발생합니다.
이 예외를 출력할 때에는 <TypeException in \[문법을 어긴 줄\]:\[전체 코드에서의 줄\] \[에러 메시지\] > 형식으로 출력합니다.

#### 5.iii RuntimeException

RuntimeException은 실행 도중 잘못된 참조, 존재하지 않는 변수에 연산 시도 등 잘못된 코드에 의해 발생합니다.
이 예외를 출력할 때에는 <RuntimeException in \[문법을 어긴 줄\]:\[전체 코드에서의 줄\] \[에러 메시지\] > 형식으로 출력합니다.

---------------------------------------