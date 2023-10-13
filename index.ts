import inquirer from 'inquirer';

interface Student {
 name: string;
 grade: number;
}

const students: Student[] = [];

function addStudent() {
 inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Enter student name:',
      },
      {
        type: 'input',
        name: 'grade',
        message: 'Enter student grade:',
      },
    ])
    .then((answers) => {
      students.push(answers as Student);
      console.log('Student added successfully!');
      mainMenu();
    });
}

function viewStudents() {
 console.log('Students:');
 students.forEach((student, index) => {
    console.log(`${index + 1}. Name: ${student.name}, Grade: ${student.grade}`);
 });
 mainMenu();
}

function mainMenu() {
 inquirer
    .prompt([
      {
        type: 'list',
        name: 'action',
        message: 'Choose an action:',
        choices: [
          { name: 'Add Student', value: 'addStudent' },
          { name: 'View Students', value: 'viewStudents' },
          { name: 'Exit', value: 'exit' },
        ],
      },
    ])
    .then((answers) => {
      switch (answers.action) {
        case 'addStudent':
          addStudent();
          break;
        case 'viewStudents':
          viewStudents();
          break;
        case 'exit':
          console.log('Goodbye!');
          break;
        default:
          console.log('Invalid action');
          mainMenu();
      }
    });
}

mainMenu();