# DalToki
TTeok 언어의 Nodejs 기반의 ECMAScript 6+로 작성되어 있는 구현체입니다.

### Install In Linux
    git clone https://github.com/ENvironmentSet/TTeok
    cd TTeok
    cd DalToki_executor
    gcc -o DalToki DalToki.c
    export PATH="$PATH:위에서 생성한 DalToki 프로그램이 있는 폴더"  
    export DalToki_PATH="클론한 TTeok폴더의 위치"

### Execute
    DalToki [TTeok프로그램 폴더]

TTeok
=====

TTeok(떡)은 HTML의 문법을 개량한 객체 지향 프로그래밍 페러다임을 가진 언어입니다.

---------------------------------------
  
## TTeok-2018 standard document.

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
    2. 컨테이너
        1. 속성
        2. 자식 컨테이너
        3. 컨테이너 체이닝
5. 예외
    1. SyntaxException
    2. TypeException
    3. RuntimeException
6. Record
7. List
8. BigInt
9. 추상 명령
10. Execution stack
11. Context
12. Environment
13. 모듈 작성
14. 알고리즘

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

#### 3.i 원시값과 타입

원시값은 내부적으로 불변성를 띄는 값을 의미합니다. 이 값은 수정하려면 재 할당해야 합니다.
원시 타입은 원시값을 표현하는 형식입니다.
모든 원시 타입은 인공 타입으로 변환 시 TypeException이 발생합니다.

##### 3.i.a 숫자 값

떡에서, 숫자의 크기의 제한은 램의 한계입니다.
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

     <var name = ` 'null' ` type  = `%null`/>

형 변환 연산 시 결과를 아래와 같습니다.

    숫자로의 타입 변환
    <number args = `null` callback = `result`>
        <@print args = `result` /> // 0
    <number/>
    
    문자로의 타입 변환
    <char args = `null` callback = `result`>
        <@print args = `result` /> // '' 
    <char/>
    
    null로의 타입 변환
    <null args = `null` callback = `result`>
        <@print args = `result` /> // null 
    <null/>
    
##### 3.1.e null 타입

null 타입은 빈 값을 표현하는 형식입니다.
변수의 값에 무엇이 들어있든 값에 접근할 때 null을 변수의 값으로서 전달해줍니다.
null 타입 의 기본값은 null입니다.

     <var type  = `%null`/>   

---------------------------------------
#### 3.ii 인공값과 타입

인공값은 내부적으로 가변성을 띄는 값을 의미합니다.
인공 타입은 인공값을 표현하는 형식입니다.
모든 인공 타입은 원시 타입으로 변환 시 TypeException이 발생합니다.

##### 3.ii.a 객체 값

이하 스펙에서 객체 값은 객체라 칭하겠습니다. 객체는 프로퍼티(속성)의 집합으로 프로퍼티는
이름과 값으로 구성되어 있습니다. 프로퍼티의 값으로는 떡의 값이 들어갈 수 있습니다. 
프로퍼티의 이름으로는 식별자만이 가능합니다. 또한 초기화되지 않은 객체의 요소는 그 타입의 기본값이 들어가게 됩니다.

    <var name = `object` type = `%object` value = `(x:%number, y:%number)` init = `(x : 1, y: 2)` />     

##### 3.ii.b 객체 타입

객체 타입은 객체를 표현하는 형식입니다.프로퍼티에 프로퍼티 이름을 통한 접근을 제공해줍니다.
접근 방식은 아래와 같습니다.

       <var name = `object` type = `%object` value = `(x:%number, y:%number)` init = `(x : 1, y: 2)` />    
       <var name = `x` type = `%number` value = `object->x` /> // x의 값은 1
   
객체 타입의 기본값은 빈 객체입니다.   
##### 3.ii.c 클래스 타입

클래스 타입은 객체의 원형을 정의하는 형식입니다.객체 값을 가진 변수의 타입을 클래스 타입으로 변환을 하면,
그 변수는 다른 객체를 생성할 때 객체지향 프로그래밍 페러다임에서의 부모 클래스로서 사용할 수 있습니다.
클래스 타입인 변수는 타입 변환과 읽기 연산
이외의 연산을 시도하면 TypeException 예외를 일으킵니다.


    <var name = `object` type = `%object` value = `(x:%number, y:%number)` init = `(x : 1, y: 2)` />    
    <var name = `object` type = `%object` form = `class` />
    
클래스 타입의 기본값은 빈 객체입니다.       
##### 3.ii.d 함수 타입

함수 타입은 객체를 호출 가능한 함수로 취급하게 만듭니다. 
함수 타입은 감싸고 있는 객체의 @header 에 있는 값을 함수의 속성으로, @body에 있는 값을 함수의 몸체로 사용합니다.

     <var name = `object` type = `%object` value = `(@header : %string, @body : %string)` init = `(@header : 'args = `` ', @body : '<@print args=` 'hi' `   />' )` />    
     <func args = `object` callback = `result`>
            <result args = `` /> // hi를 출력
     <func/>
     
함수 타입의 기본값은 (@header : 'args = `` ', @body : '')인 객체 입니다. 입니다.     
##### 3.ii.e 리스트 값

리스트 값은 열거 가능한 값들의 연속입니다. 값으로는 떡의 값이 들어갈 수 있습니다.

    <var name = `list` type = `%list` value = `[1,'hi',(x : %number),null,%function]` />

##### 3.ii.f 리스트 타입

리스트 타입은 리스트를 표현하는 형식입니다.
기본값은 빈 리스트 []입니다.

    <var type  = `%list`/> 