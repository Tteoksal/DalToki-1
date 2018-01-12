module.exports = setBuiltInFunctions;

function setBuiltInFunctions (WINDOW,Var,Func,Exception) {
    WINDOW.scope["@PRINT"] = new Func("built-in",print,["src"]);
    function print (variable,_scope,_callback) {
        if(variable.type !== "string") variable = variable.get().toString();
        console.log(variable.get_unwrap());
    }
    WINDOW.scope["@ADD"] = new Func("built-in",add,["dis","src"]);
    function add (dis,src,_scope,_callback) {
        dis = dis.get();
        src = src.get();
        switch (dis.type) {
            case "integer":
                if(src.type === "integer") {
                    dis.add(src);
                } else throw new RunnerException("Integer addition is available at only integer type");
                break;
            case "string":
                if(src.type === "string") {
                    dis.concat(src);
                } else throw new RunnerException("String addition is available at only string type");
                break;
            case "float":
                if(src.type === "integer" || src.type === "float") {
                    dis.add(src);
                } else throw new RunnerException("Float addition is available at only integer and float type");
                break;
            default :
                throw new RunnerException("@ADD function's [DIS] arg's type is must integer,string,float");
        }
    }
    WINDOW.scope["@SUB"] = new Func("built-in",sub,["dis","src"]);
    function sub (dis,src,_scope,_callback) {
        dis = dis.get();
        src = src.get();
        switch (dis.type) {
            case "integer":
                if(src.type === "integer") {
                    dis.sub(src);
                } else throw new RunnerException("Integer sub is available at only integer type");
                break;
            case "float":
                if(src.type === "integer" || src.type === "float") {
                    dis.sub(src);
                } else throw new RunnerException("Float sub is available at only integer and float type");
                break;
            default :
                throw new RunnerException("@SUB function's [DIS] arg's type is must integer,float");
        }
    }
    WINDOW.scope["@MUL"] = new Func("built-in",mul,["dis","src"]);
    function mul (dis,src,_scope,_callback) {
        dis = dis.get();
        src = src.get();
        switch (dis.type) {
            case "integer":
                if(src.type === "integer") {
                    dis.mul(src);
                } else throw new RunnerException("Integer sub is available at only integer type");
                break;
            case "float":
                if(src.type === "integer" || src.type === "float") {
                    dis.mul(src);
                } else throw new RunnerException("Float sub is available at only integer and float type");
                break;
            default :
                throw new RunnerException("@SUB function's [DIS] arg's type is must integer,float");
        }
    }
    WINDOW.scope["@DEBUG_LOG"] =  new Func("built-in",debug_log,["src"]);
    function debug_log (item,_scope,_callback) {
        console.log(require("util").inspect(item.get_unwrap(),{showHidden : false,depth : null}));
    }
    WINDOW.scope["@ASSIGNMENT"] = new Func("built-in",assignment,["dis","src"]);
    function assignment (dis,src) {
        src = src.get();
        dis.change(src.value,src.type);
    }
}