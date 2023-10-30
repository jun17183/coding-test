function solution(new_id) {
    // 1단계
    new_id = new_id.toLowerCase();
    
    // 2단계
    new_id = new_id.replace(/[^0-9a-z._-]/g, "");
    
    // 3단계
    new_id = new_id.replace(/\.+/g, ".");
    
    // 4단계
    if (new_id[0] === ".") {
        new_id = new_id.replace(".", "");
    }
    if (new_id[new_id.length - 1] === ".") {
        new_id = new_id.slice(0, -1);
    }
    
    // 5단계
    if (new_id === "") new_id = "a";
    
    // 6단계
    if (new_id.length >= 16) {
        new_id = new_id.slice(0, 15);
        
        if (new_id[new_id.length - 1] === ".") {
            new_id = new_id.slice(0, -1);
        }
    }
    
    // 7단계
    if (new_id.length <= 2) {
        while (new_id.length < 3) {
            new_id += new_id[new_id.length - 1];
        }
    }
    return new_id;
}