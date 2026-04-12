class Auth {
  login(name: string, password: string) {
    if (name && password) {
      return `Login`;
    } else {
      return `Not Login`;
    }
  }
}

class Student extends Auth {
  result(marks: number): string {
    return marks > 33 ? "PASS" : "FAIL";
  }
}

class Teacher extends Auth {
  assignMarks(): string {
    return "Marks assigned";
  }
}

const s1 = new Student();

console.log(s1.login("Rahul", "123")); // Login
console.log(s1.result(40));            // PASS

const t1 = new Teacher();
console.log(t1.login("Sir", "abc"));  // Login
