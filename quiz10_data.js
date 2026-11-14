/**
 * SWD392 Quiz 10 Data - Dynamic Interaction & Statecharts
 * 60 Questions extracted from Quiz10 materials
 * Questions and options in English; Hints and Explanations in Vietnamese.
 */
window.QUIZ10_DATA = [
  {
    "id": 1,
    "image": "../Quiz10/Q1.webp",
    "question": "What is a platform-independent model (PIM)?",
    "options": [
      {
        "key": "A",
        "text": "A software platform before a commitment is made to a specific hardware platform."
      },
      {
        "key": "B",
        "text": "A precise model of the software architecture before a commitment is made to a specific platform."
      },
      {
        "key": "C",
        "text": "A precise model of the software architecture mapped to a specific platform."
      },
      {
        "key": "D",
        "text": "A graphical or textual description of the software."
      }
    ],
    "answer": "B",
    "hint": "Đọc kỹ các từ khóa chuyên ngành trong câu hỏi để đối chiếu với các nguyên lý thiết kế chuẩn của COMET & UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"A precise model of the software architecture before a commitment is made to a specific platform.\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"A software platform before a commitment is made to a specific hardware platform.\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: A precise model of the software architecture before a commitment is made to a specific platform.. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"A precise model of the software architecture mapped to a specific platform.\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"A graphical or textual description of the software.\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 2,
    "image": "../Quiz10/Q2.webp",
    "question": "What is a platform-specific model (PSM)?",
    "options": [
      {
        "key": "A",
        "text": "A specific hardware platform."
      },
      {
        "key": "B",
        "text": "A precise model of the software architecture before a commitment is made to a specific platform."
      },
      {
        "key": "C",
        "text": "A precise model of the software architecture mapped to a specific platform."
      },
      {
        "key": "D",
        "text": "A graphical or textual description of the software."
      }
    ],
    "answer": "C",
    "hint": "Đọc kỹ các từ khóa chuyên ngành trong câu hỏi để đối chiếu với các nguyên lý thiết kế chuẩn của COMET & UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [C]: \"A precise model of the software architecture mapped to a specific platform.\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"A specific hardware platform.\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "Sai: \"A precise model of the software architecture before a commitment is made to a specific platform.\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "C": "ĐÚNG: A precise model of the software architecture mapped to a specific platform.. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "D": "Sai: \"A graphical or textual description of the software.\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 3,
    "image": "../Quiz10/Q3.webp",
    "question": "What does UML stand for? R Unified Modeling Language",
    "options": [
      {
        "key": "A",
        "text": "Universal Modeling Language"
      },
      {
        "key": "B",
        "text": "Uniform Modeling Language"
      },
      {
        "key": "C",
        "text": "Unique Modeling Language"
      },
      {
        "key": "D",
        "text": "None of the above"
      }
    ],
    "answer": "B",
    "hint": "Đọc kỹ các từ khóa chuyên ngành trong câu hỏi để đối chiếu với các nguyên lý thiết kế chuẩn của COMET & UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"Uniform Modeling Language\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"Universal Modeling Language\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: Uniform Modeling Language. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"Unique Modeling Language\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"None of the above\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 4,
    "image": "../Quiz10/Q4.webp",
    "question": "What is the primary purpose of Deployment Diagrams in software architecture?",
    "options": [
      {
        "key": "A",
        "text": "Illustrate the physical distribution of software components"
      },
      {
        "key": "B",
        "text": "Simplify' data modeling"
      },
      {
        "key": "C",
        "text": "Automate network configurations"
      },
      {
        "key": "D",
        "text": "Reduce system complexity"
      }
    ],
    "answer": "A",
    "hint": "Đọc kỹ các từ khóa chuyên ngành trong câu hỏi để đối chiếu với các nguyên lý thiết kế chuẩn của COMET & UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [A]: \"Illustrate the physical distribution of software components\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "ĐÚNG: Illustrate the physical distribution of software components. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "B": "Sai: \"Simplify' data modeling\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "C": "Sai: \"Automate network configurations\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"Reduce system complexity\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 5,
    "image": "../Quiz10/Q5.webp",
    "question": "In UML, what is the purpose of a \"composite structure diagram\"?",
    "options": [
      {
        "key": "A",
        "text": "To represent the static structure of a system's classes and their relationships."
      },
      {
        "key": "B",
        "text": "To illustrate the interactions and collaborations between objects in a system"
      },
      {
        "key": "C",
        "text": "To model the organization and behavior of objects within a single classifier."
      },
      {
        "key": "D",
        "text": "To depict the flow of control and the partitioning of a system into states and transitions."
      }
    ],
    "answer": "B",
    "hint": "Đọc kỹ các từ khóa chuyên ngành trong câu hỏi để đối chiếu với các nguyên lý thiết kế chuẩn của COMET & UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"To illustrate the interactions and collaborations between objects in a system\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"To represent the static structure of a system's classes and their relationships.\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: To illustrate the interactions and collaborations between objects in a system. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"To model the organization and behavior of objects within a single classifier.\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"To depict the flow of control and the partitioning of a system into states and transitions.\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 6,
    "image": "../Quiz10/Q6.webp",
    "question": "In a use case diagram, what does an actor represent?",
    "options": [
      {
        "key": "A",
        "text": "specific instance of a class in the system"
      },
      {
        "key": "B",
        "text": "software component responsible for data storage An external entity interacting with the system"
      },
      {
        "key": "C",
        "text": "method or function within a class"
      },
      {
        "key": "D",
        "text": "None of the above"
      }
    ],
    "answer": "B",
    "hint": "Đọc kỹ các từ khóa chuyên ngành trong câu hỏi để đối chiếu với các nguyên lý thiết kế chuẩn của COMET & UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"software component responsible for data storage An external entity interacting with the system\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"specific instance of a class in the system\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: software component responsible for data storage An external entity interacting with the system. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"method or function within a class\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"None of the above\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 7,
    "image": "../Quiz10/Q7.webp",
    "question": "Which of the following is NOT a benefit of using software models?",
    "options": [
      {
        "key": "A",
        "text": "Better communication bebueen stakeholders"
      },
      {
        "key": "B",
        "text": "Easier maintenance of code"
      },
      {
        "key": "C",
        "text": "Increased hardware performance"
      },
      {
        "key": "D",
        "text": "Early detection of design flaws"
      }
    ],
    "answer": "B",
    "hint": "Đọc kỹ các từ khóa chuyên ngành trong câu hỏi để đối chiếu với các nguyên lý thiết kế chuẩn của COMET & UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"Easier maintenance of code\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"Better communication bebueen stakeholders\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: Easier maintenance of code. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"Increased hardware performance\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"Early detection of design flaws\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 8,
    "image": "../Quiz10/Q8.webp",
    "question": "What is the goal of software validation?",
    "options": [
      {
        "key": "A",
        "text": "Building the system"
      },
      {
        "key": "B",
        "text": "Building the right system"
      },
      {
        "key": "C",
        "text": "Building the system right"
      },
      {
        "key": "D",
        "text": "Testing the system"
      }
    ],
    "answer": "B",
    "hint": "Phân biệt Validation (Xây dựng đúng sản phẩm khách hàng cần) và Verification (Xây dựng sản phẩm đúng quy chuẩn).",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"Building the right system\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"Building the system\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: Building the right system. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"Building the system right\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"Testing the system\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 9,
    "image": "../Quiz10/Q9.webp",
    "question": "In the context of software life cycle processes, what does \"maintenance\" typically involve?",
    "options": [
      {
        "key": "A",
        "text": "Writing initial code"
      },
      {
        "key": "B",
        "text": "Designing the system architecture"
      },
      {
        "key": "C",
        "text": "Updating and fixing the software after deployment"
      },
      {
        "key": "D",
        "text": "Planning the project timeline"
      }
    ],
    "answer": "B",
    "hint": "Đọc kỹ các từ khóa chuyên ngành trong câu hỏi để đối chiếu với các nguyên lý thiết kế chuẩn của COMET & UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"Designing the system architecture\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"Writing initial code\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: Designing the system architecture. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"Updating and fixing the software after deployment\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"Planning the project timeline\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 10,
    "image": "../Quiz10/Q10.webp",
    "question": "What is the signature of an operation?",
    "options": [
      {
        "key": "A",
        "text": "The operation's name"
      },
      {
        "key": "B",
        "text": "The operation's function or subroutine"
      },
      {
        "key": "C",
        "text": "The operation's name, parameters, and return value"
      },
      {
        "key": "D",
        "text": "The object's interface"
      }
    ],
    "answer": "B",
    "hint": "Đọc kỹ các từ khóa chuyên ngành trong câu hỏi để đối chiếu với các nguyên lý thiết kế chuẩn của COMET & UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"The operation's function or subroutine\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"The operation's name\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: The operation's function or subroutine. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"The operation's name, parameters, and return value\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"The object's interface\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 11,
    "image": "../Quiz10/Q11.webp",
    "question": "What is the main purpose of information hiding in object design?",
    "options": [
      {
        "key": "A",
        "text": "To make all parts of an object visible to other objects"
      },
      {
        "key": "B",
        "text": "To decide what information should be visible and what should be hidden"
      },
      {
        "key": "C",
        "text": "To expose the internal details of an object to other objects"
      },
      {
        "key": "D",
        "text": "To allow unrestricted access to an object's internals"
      }
    ],
    "answer": "B",
    "hint": "Nguyên lý giấu thông tin của David Parnas: Che giấu những quyết định thiết kế có khả năng biến động trong tương lai.",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"To decide what information should be visible and what should be hidden\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"To make all parts of an object visible to other objects\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: To decide what information should be visible and what should be hidden. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"To expose the internal details of an object to other objects\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"To allow unrestricted access to an object's internals\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 12,
    "image": "../Quiz10/Q12.webp",
    "question": "Which of the following is a characteristic of an object?",
    "options": [
      {
        "key": "A",
        "text": "A function or subroutine"
      },
      {
        "key": "B",
        "text": "A module"
      },
      {
        "key": "C",
        "text": "Groups data and procedures that operate on the data"
      },
      {
        "key": "D",
        "text": "Groups a function and an algorithm"
      }
    ],
    "answer": "B",
    "hint": "Đọc kỹ các từ khóa chuyên ngành trong câu hỏi để đối chiếu với các nguyên lý thiết kế chuẩn của COMET & UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"A module\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"A function or subroutine\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: A module. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"Groups data and procedures that operate on the data\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"Groups a function and an algorithm\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 13,
    "image": "../Quiz10/Q13.webp",
    "question": "The workflows in the USDP include which of the following?",
    "options": [
      {
        "key": "A",
        "text": "Requirements, analysis, design, implementation, and test"
      },
      {
        "key": "B",
        "text": "Requirements, analysis, coding, deployment, and testing"
      },
      {
        "key": "C",
        "text": "Planning, coding, debugging, maintenance, and testing"
      },
      {
        "key": "D",
        "text": "Requirements, planning, debugging, and maintenance"
      }
    ],
    "answer": "B",
    "hint": "Phân biệt Validation (Xây dựng đúng sản phẩm khách hàng cần) và Verification (Xây dựng sản phẩm đúng quy chuẩn).",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"Requirements, analysis, coding, deployment, and testing\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"Requirements, analysis, design, implementation, and test\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: Requirements, analysis, coding, deployment, and testing. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"Planning, coding, debugging, maintenance, and testing\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"Requirements, planning, debugging, and maintenance\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 14,
    "image": "../Quiz10/Q14.webp",
    "question": "Which component of software architecture ensures scalability and modularity?",
    "options": [
      {
        "key": "A",
        "text": "Client-Server Model"
      },
      {
        "key": "B",
        "text": "Monolithic Architecture"
      },
      {
        "key": "C",
        "text": "Procedural Programming"
      },
      {
        "key": "D",
        "text": "Testing Frameworks"
      }
    ],
    "answer": "B",
    "hint": "Phân biệt Validation (Xây dựng đúng sản phẩm khách hàng cần) và Verification (Xây dựng sản phẩm đúng quy chuẩn).",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"Monolithic Architecture\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"Client-Server Model\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: Monolithic Architecture. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"Procedural Programming\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"Testing Frameworks\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 15,
    "image": "../Quiz10/Q15.webp",
    "question": "What is the primary focus of the analysis model?",
    "options": [
      {
        "key": "A",
        "text": "Designing the user interface"
      },
      {
        "key": "B",
        "text": "Understanding and analyzing the problem domain"
      },
      {
        "key": "C",
        "text": "Writing code for the solution"
      },
      {
        "key": "D",
        "text": "Testing the final system"
      }
    ],
    "answer": "B",
    "hint": "Phân biệt Validation (Xây dựng đúng sản phẩm khách hàng cần) và Verification (Xây dựng sản phẩm đúng quy chuẩn).",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"Understanding and analyzing the problem domain\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"Designing the user interface\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: Understanding and analyzing the problem domain. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"Writing code for the solution\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"Testing the final system\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 16,
    "image": "../Quiz10/Q16.webp",
    "question": "What does a use case typically describe in use case modeling?",
    "options": [
      {
        "key": "A",
        "text": "The internal workings of the system's hardware"
      },
      {
        "key": "B",
        "text": "The interaction between an actor and the system to achieve a goal"
      },
      {
        "key": "C",
        "text": "The database schema"
      },
      {
        "key": "D",
        "text": "The software development methodology"
      }
    ],
    "answer": "B",
    "hint": "Đọc kỹ các từ khóa chuyên ngành trong câu hỏi để đối chiếu với các nguyên lý thiết kế chuẩn của COMET & UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"The interaction between an actor and the system to achieve a goal\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"The internal workings of the system's hardware\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: The interaction between an actor and the system to achieve a goal. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"The database schema\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"The software development methodology\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 17,
    "image": "../Quiz10/Q17.webp",
    "question": "What can an extension use case be used for?",
    "options": [
      {
        "key": "A",
        "text": "To describe a lengthy interaction with an actor"
      },
      {
        "key": "B",
        "text": "To describe functionality that is common to more than one use case"
      },
      {
        "key": "C",
        "text": "To describe the functionality of a use case that is extended by another use case(s)"
      },
      {
        "key": "D",
        "text": "To describe a conditional part of a different use case that is only executed under certain circumstances"
      }
    ],
    "answer": "B",
    "hint": "Đọc kỹ các từ khóa chuyên ngành trong câu hỏi để đối chiếu với các nguyên lý thiết kế chuẩn của COMET & UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"To describe functionality that is common to more than one use case\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"To describe a lengthy interaction with an actor\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: To describe functionality that is common to more than one use case. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"To describe the functionality of a use case that is extended by another use case(s)\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"To describe a conditional part of a different use case that is only executed under certain circumstances\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 18,
    "image": "../Quiz10/Q18.webp",
    "question": "What is the main purpose of using use Case Modeling in system development?",
    "options": [
      {
        "key": "A",
        "text": "Identifying the interactions between users and the system"
      },
      {
        "key": "B",
        "text": "Developing algorithms for data storage"
      },
      {
        "key": "C",
        "text": "Automating performance testing"
      },
      {
        "key": "D",
        "text": "Establishing network protocols"
      }
    ],
    "answer": "B",
    "hint": "Phân biệt Validation (Xây dựng đúng sản phẩm khách hàng cần) và Verification (Xây dựng sản phẩm đúng quy chuẩn).",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"Developing algorithms for data storage\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"Identifying the interactions between users and the system\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: Developing algorithms for data storage. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"Automating performance testing\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"Establishing network protocols\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 19,
    "image": "../Quiz10/Q19.webp",
    "question": "What is a composition hierarchy?",
    "options": [
      {
        "key": "A",
        "text": "A weak form of a generalization/specialization hierarchy"
      },
      {
        "key": "B",
        "text": "A strong form of a generalization/specialization hierarchy"
      },
      {
        "key": "C",
        "text": "A weak form of a whole/part relationship"
      },
      {
        "key": "D",
        "text": "A strong form of a whole/part relationship"
      }
    ],
    "answer": "D",
    "hint": "Quan hệ Composition biểu thị sự gắn kết chặt chẽ giữa tổng thể và bộ phận (vòng đời phụ thuộc).",
    "explanation": {
      "summary": "Đáp án chính xác là [D]: \"A strong form of a whole/part relationship\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"A weak form of a generalization/specialization hierarchy\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "Sai: \"A strong form of a generalization/specialization hierarchy\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "C": "Sai: \"A weak form of a whole/part relationship\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "ĐÚNG: A strong form of a whole/part relationship. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm."
      }
    }
  },
  {
    "id": 20,
    "image": "../Quiz10/Q20.webp",
    "question": "What is an attribute?",
    "options": [
      {
        "key": "A",
        "text": "A relationship between buo classes"
      },
      {
        "key": "B",
        "text": "A parameter of an operation or method"
      },
      {
        "key": "C",
        "text": "A data value held by an object in a class"
      },
      {
        "key": "D",
        "text": "The return value from an operation"
      }
    ],
    "answer": "B",
    "hint": "Đọc kỹ các từ khóa chuyên ngành trong câu hỏi để đối chiếu với các nguyên lý thiết kế chuẩn của COMET & UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"A parameter of an operation or method\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"A relationship between buo classes\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: A parameter of an operation or method. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"A data value held by an object in a class\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"The return value from an operation\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 21,
    "image": "../Quiz10/Q21.webp",
    "question": "What is an entity class?",
    "options": [
      {
        "key": "A",
        "text": "class on an entity/relationship diagram"
      },
      {
        "key": "B",
        "text": "class that stores data"
      },
      {
        "key": "C",
        "text": "class that interfaces to an external entity An external class"
      },
      {
        "key": "D",
        "text": "None of the above"
      }
    ],
    "answer": "B",
    "hint": "Đọc kỹ các từ khóa chuyên ngành trong câu hỏi để đối chiếu với các nguyên lý thiết kế chuẩn của COMET & UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"class that stores data\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"class on an entity/relationship diagram\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: class that stores data. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"class that interfaces to an external entity An external class\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"None of the above\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 22,
    "image": "../Quiz10/Q22.webp",
    "question": "What is the main difference between a class and an interface?",
    "options": [
      {
        "key": "A",
        "text": "class can contain implementations of methods, while an interface cannot An interface can be instantiated, while a class cannot"
      },
      {
        "key": "B",
        "text": "class cannot be extended, while an interface can"
      },
      {
        "key": "C",
        "text": "class only contains method declarations, while an interface contains method implementations"
      },
      {
        "key": "D",
        "text": "None of the above"
      }
    ],
    "answer": "B",
    "hint": "Đọc kỹ các từ khóa chuyên ngành trong câu hỏi để đối chiếu với các nguyên lý thiết kế chuẩn của COMET & UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"class cannot be extended, while an interface can\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"class can contain implementations of methods, while an interface cannot An interface can be instantiated, while a class cannot\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: class cannot be extended, while an interface can. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"class only contains method declarations, while an interface contains method implementations\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"None of the above\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 23,
    "image": "../Quiz10/Q23.webp",
    "question": "What is an information hiding object?",
    "options": [
      {
        "key": "A",
        "text": "An active object that encapsulates data"
      },
      {
        "key": "B",
        "text": "A passive object that encapsulates data"
      },
      {
        "key": "C",
        "text": "A class that encapsulates data"
      },
      {
        "key": "D",
        "text": "A task that encapsulates data"
      }
    ],
    "answer": "B",
    "hint": "Nguyên lý giấu thông tin của David Parnas: Che giấu những quyết định thiết kế có khả năng biến động trong tương lai.",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"A passive object that encapsulates data\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"An active object that encapsulates data\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: A passive object that encapsulates data. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"A class that encapsulates data\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"A task that encapsulates data\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 24,
    "image": "../Quiz10/Q24.webp",
    "question": "Which one of the following is NOT a concept associated with object-oriented programming?",
    "options": [
      {
        "key": "A",
        "text": "Encapsulation"
      },
      {
        "key": "B",
        "text": "B. Class"
      },
      {
        "key": "C",
        "text": "Subclass"
      },
      {
        "key": "D",
        "text": "Subroutine"
      }
    ],
    "answer": "D",
    "hint": "Đọc kỹ các từ khóa chuyên ngành trong câu hỏi để đối chiếu với các nguyên lý thiết kế chuẩn của COMET & UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [D]: \"Subroutine\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"Encapsulation\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "Sai: \"B. Class\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "C": "Sai: \"Subclass\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "ĐÚNG: Subroutine. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm."
      }
    }
  },
  {
    "id": 25,
    "image": "../Quiz10/Q25.webp",
    "question": "What is the primary purpose of a sequence diagram in UML?",
    "options": [
      {
        "key": "A",
        "text": "To model the static structure of a system"
      },
      {
        "key": "B",
        "text": "To represent the flow of data between objects"
      },
      {
        "key": "C",
        "text": "To describe the interactions between objects over time"
      },
      {
        "key": "D",
        "text": "To design database schemas"
      }
    ],
    "answer": "B",
    "hint": "Đọc kỹ các từ khóa chuyên ngành trong câu hỏi để đối chiếu với các nguyên lý thiết kế chuẩn của COMET & UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"To represent the flow of data between objects\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"To model the static structure of a system\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: To represent the flow of data between objects. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"To describe the interactions between objects over time\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"To design database schemas\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 26,
    "image": "../Quiz10/Q26.webp",
    "question": "What does a sequence diagram depict?",
    "options": [
      {
        "key": "A",
        "text": "The sequence of external objects communicating with each other"
      },
      {
        "key": "B",
        "text": "Classes and their relationships"
      },
      {
        "key": "C",
        "text": "Software objects and the sequence of their interactions"
      },
      {
        "key": "D",
        "text": "The external objects communicating with the system"
      }
    ],
    "answer": "B",
    "hint": "Đọc kỹ các từ khóa chuyên ngành trong câu hỏi để đối chiếu với các nguyên lý thiết kế chuẩn của COMET & UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"Classes and their relationships\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"The sequence of external objects communicating with each other\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: Classes and their relationships. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"Software objects and the sequence of their interactions\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"The external objects communicating with the system\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 27,
    "image": "../Quiz10/Q27.webp",
    "question": "What is the generic form of an interaction diagram?",
    "options": [
      {
        "key": "A",
        "text": "Depicts several objects interacting with each other"
      },
      {
        "key": "B",
        "text": "Depicts one possible sequence of interactions among objects"
      },
      {
        "key": "C",
        "text": "Depicts all possible interactions among objects"
      },
      {
        "key": "D",
        "text": "Depicts all classes and their associations with each other"
      }
    ],
    "answer": "B",
    "hint": "Đọc kỹ các từ khóa chuyên ngành trong câu hỏi để đối chiếu với các nguyên lý thiết kế chuẩn của COMET & UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"Depicts one possible sequence of interactions among objects\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"Depicts several objects interacting with each other\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: Depicts one possible sequence of interactions among objects. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"Depicts all possible interactions among objects\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"Depicts all classes and their associations with each other\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 28,
    "image": "../Quiz10/Q28.webp",
    "question": "What is the function of finite state machines in software modeling?",
    "options": [
      {
        "key": "A",
        "text": "Captures system behavior as states and transitions"
      },
      {
        "key": "B",
        "text": "Defines physical components in system design"
      },
      {
        "key": "C",
        "text": "Simplifies the coding of software applications"
      },
      {
        "key": "D",
        "text": "Represents relationships between database entities"
      }
    ],
    "answer": "B",
    "hint": "Đọc kỹ các từ khóa chuyên ngành trong câu hỏi để đối chiếu với các nguyên lý thiết kế chuẩn của COMET & UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"Defines physical components in system design\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"Captures system behavior as states and transitions\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: Defines physical components in system design. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"Simplifies the coding of software applications\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"Represents relationships between database entities\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 29,
    "image": "../Quiz10/Q29.webp",
    "question": "What is a state transition into a composite state equivalent to?",
    "options": [
      {
        "key": "A",
        "text": "A transition into only one of the substates"
      },
      {
        "key": "B",
        "text": "A transition into each of the substates"
      },
      {
        "key": "C",
        "text": "A transition into none of the substates"
      },
      {
        "key": "D",
        "text": "A transition into any one of the substates"
      }
    ],
    "answer": "B",
    "hint": "Hãy chú ý sự kích hoạt của Sự kiện (Event), điều kiện canh giữ (Guard Condition) và Hành động (Action).",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"A transition into each of the substates\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"A transition into only one of the substates\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: A transition into each of the substates. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"A transition into none of the substates\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"A transition into any one of the substates\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 30,
    "image": "../Quiz10/Q30.webp",
    "question": "What is a state transition out of a composite state equivalent to?",
    "options": [
      {
        "key": "A",
        "text": "A transition out of only one of the substates"
      },
      {
        "key": "B",
        "text": "A transition out of each of the substates"
      },
      {
        "key": "C",
        "text": "A transition out of none of the substates"
      },
      {
        "key": "D",
        "text": "A transition out of any one of the substates"
      }
    ],
    "answer": "B",
    "hint": "Hãy chú ý sự kích hoạt của Sự kiện (Event), điều kiện canh giữ (Guard Condition) và Hành động (Action).",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"A transition out of each of the substates\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"A transition out of only one of the substates\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: A transition out of each of the substates. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"A transition out of none of the substates\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"A transition out of any one of the substates\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 31,
    "image": "../Quiz10/Q31.webp",
    "question": "An output message from a state dependent control object corresponds to:",
    "options": [
      {
        "key": "A",
        "text": "An event on the internal state machine"
      },
      {
        "key": "B",
        "text": "An action on the internal state machine"
      },
      {
        "key": "C",
        "text": "A condition on the internal state machine"
      },
      {
        "key": "D",
        "text": "A state on the internal state machine"
      }
    ],
    "answer": "B",
    "hint": "Đọc kỹ các từ khóa chuyên ngành trong câu hỏi để đối chiếu với các nguyên lý thiết kế chuẩn của COMET & UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"An action on the internal state machine\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"An event on the internal state machine\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: An action on the internal state machine. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"A condition on the internal state machine\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"A state on the internal state machine\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 32,
    "image": "../Quiz10/Q32.webp",
    "question": "What is the significance of using state-dependent dynamic interaction models?",
    "options": [
      {
        "key": "A",
        "text": "Captures system behavior under different runtime scenarios"
      },
      {
        "key": "B",
        "text": "Reduces complexity in client-server architectures"
      },
      {
        "key": "C",
        "text": "Eliminates the need for sequence diagrams"
      },
      {
        "key": "D",
        "text": "Automates testing frameworks"
      }
    ],
    "answer": "B",
    "hint": "Phân biệt Validation (Xây dựng đúng sản phẩm khách hàng cần) và Verification (Xây dựng sản phẩm đúng quy chuẩn).",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"Reduces complexity in client-server architectures\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"Captures system behavior under different runtime scenarios\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: Reduces complexity in client-server architectures. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"Eliminates the need for sequence diagrams\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"Automates testing frameworks\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 33,
    "image": "../Quiz10/Q33.webp",
    "question": "Which of the following could happen on an interaction diagram?",
    "options": [
      {
        "key": "A",
        "text": "state-dependent control object sends a message to an entity object"
      },
      {
        "key": "B",
        "text": "state-dependent control object sends a message to a coordinator object"
      },
      {
        "key": "C",
        "text": "state-dependent control object sends a message to a printer object All of the above"
      },
      {
        "key": "D",
        "text": "None of the above"
      }
    ],
    "answer": "C",
    "hint": "Đọc kỹ các từ khóa chuyên ngành trong câu hỏi để đối chiếu với các nguyên lý thiết kế chuẩn của COMET & UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [C]: \"state-dependent control object sends a message to a printer object All of the above\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"state-dependent control object sends a message to an entity object\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "Sai: \"state-dependent control object sends a message to a coordinator object\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "C": "ĐÚNG: state-dependent control object sends a message to a printer object All of the above. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "D": "Sai: \"None of the above\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 34,
    "image": "../Quiz10/Q34.webp",
    "question": "How do architectural communication patterns improve system performance?",
    "options": [
      {
        "key": "A",
        "text": "By enabling asynchronous messaging and efficient data exchange"
      },
      {
        "key": "B",
        "text": "By simplifying class diagrams"
      },
      {
        "key": "C",
        "text": "By automating interaction diagrams"
      },
      {
        "key": "D",
        "text": "By centralizing deployment diagrams"
      }
    ],
    "answer": "D",
    "hint": "Xác định mục đích cốt lõi của mẫu thiết kế: Tạo lập (Creational), Cấu trúc (Structural) hay Hành vi (Behavioral).",
    "explanation": {
      "summary": "Đáp án chính xác là [D]: \"By centralizing deployment diagrams\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"By enabling asynchronous messaging and efficient data exchange\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "Sai: \"By simplifying class diagrams\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "C": "Sai: \"By automating interaction diagrams\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "ĐÚNG: By centralizing deployment diagrams. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm."
      }
    }
  },
  {
    "id": 35,
    "image": "../Quiz10/Q35.webp",
    "question": "What does the software architecture describe?",
    "options": [
      {
        "key": "A",
        "text": "The software inside a building"
      },
      {
        "key": "B",
        "text": "The structure of a Client/Server system"
      },
      {
        "key": "C",
        "text": "The overall structure of a software system"
      },
      {
        "key": "D",
        "text": "The software classes and their relationships"
      }
    ],
    "answer": "B",
    "hint": "Đọc kỹ các từ khóa chuyên ngành trong câu hỏi để đối chiếu với các nguyên lý thiết kế chuẩn của COMET & UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"The structure of a Client/Server system\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"The software inside a building\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: The structure of a Client/Server system. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"The overall structure of a software system\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"The software classes and their relationships\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 36,
    "image": "../Quiz10/Q36.webp",
    "question": "",
    "options": [
      {
        "key": "A",
        "text": "software architecture is defined by Bass, Clements, and Kazman, what is it?"
      },
      {
        "key": "B",
        "text": "The software architecture of a program or computing system is the structure or structures of the system, which comprise software elements, the externally visible properties of those elements, and the relationships among them."
      },
      {
        "key": "C",
        "text": "The software architecture of a computer program or system that solves a problem."
      },
      {
        "key": "D",
        "text": "The software architecture ofa computer program or system that does some basic work for humans D. The software architecture of a computer program or system that assists humans in processing information"
      }
    ],
    "answer": "B",
    "hint": "Đọc kỹ các từ khóa chuyên ngành trong câu hỏi để đối chiếu với các nguyên lý thiết kế chuẩn của COMET & UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"The software architecture of a program or computing system is the structure or structures of the system, which comprise software elements, the externally visible properties of those elements, and the relationships among them.\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"software architecture is defined by Bass, Clements, and Kazman, what is it?\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: The software architecture of a program or computing system is the structure or structures of the system, which comprise software elements, the externally visible properties of those elements, and the relationships among them.. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"The software architecture of a computer program or system that solves a problem.\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"The software architecture ofa computer program or system that does some basic work for humans D. The software architecture of a computer program or system that assists humans in processing information\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 37,
    "image": "../Quiz10/Q37.webp",
    "question": "What are the typical components of a service subsystem?",
    "options": [
      {
        "key": "A",
        "text": "Graphical displays and keyboards"
      },
      {
        "key": "B",
        "text": "Coordinator objects and business logic objects"
      },
      {
        "key": "C",
        "text": "Standalone, non-composite objects"
      },
      {
        "key": "D",
        "text": "Multiple threads of control"
      }
    ],
    "answer": "B",
    "hint": "Dịch vụ trong SOA có tính độc lập (autonomous), tái sử dụng (reusable), phát hiện được (discoverable) và ghép lỏng (loosely coupled).",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"Coordinator objects and business logic objects\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"Graphical displays and keyboards\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: Coordinator objects and business logic objects. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"Standalone, non-composite objects\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"Multiple threads of control\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 38,
    "image": "../Quiz10/Q38.webp",
    "question": "What is a characteristic of a more complex user interaction subsystem?",
    "options": [
      {
        "key": "A",
        "text": "It supports a command line interface exclusively"
      },
      {
        "key": "B",
        "text": "It operates on a single node"
      },
      {
        "key": "C",
        "text": "It doesn't interface with user 1/0 devices"
      },
      {
        "key": "D",
        "text": "It involves multiple windows and multiple threads of control"
      }
    ],
    "answer": "B",
    "hint": "Subsystem phân rã hệ thống theo các mối quan tâm riêng biệt (separation of concerns), tăng tính gắn kết (cohesion) và giảm phụ thuộc (coupling).",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"It operates on a single node\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"It supports a command line interface exclusively\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: It operates on a single node. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"It doesn't interface with user 1/0 devices\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"It involves multiple windows and multiple threads of control\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 39,
    "image": "../Quiz10/Q39.webp",
    "question": "How should an external object be designed to interface to the system?",
    "options": [
      {
        "key": "A",
        "text": "It should interface to one subsystem"
      },
      {
        "key": "B",
        "text": "It should interface to several subsystems."
      },
      {
        "key": "C",
        "text": "It should interface to every subsystem."
      },
      {
        "key": "D",
        "text": "It should interface to none of the subsystems."
      }
    ],
    "answer": "B",
    "hint": "Subsystem phân rã hệ thống theo các mối quan tâm riêng biệt (separation of concerns), tăng tính gắn kết (cohesion) và giảm phụ thuộc (coupling).",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"It should interface to several subsystems.\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"It should interface to one subsystem\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: It should interface to several subsystems.. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"It should interface to every subsystem.\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"It should interface to none of the subsystems.\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 40,
    "image": "../Quiz10/Q40 (1).webp",
    "question": "What is inheritance?",
    "options": [
      {
        "key": "A",
        "text": "A mechanism for inheriting characteristics from a parent"
      },
      {
        "key": "B",
        "text": "A mechanism for sharing and reusing code between classes"
      },
      {
        "key": "C",
        "text": "A mechanism for sharing data between classes"
      },
      {
        "key": "D",
        "text": "A mechanism for hiding information between classes"
      }
    ],
    "answer": "B",
    "hint": "Đọc kỹ các từ khóa chuyên ngành trong câu hỏi để đối chiếu với các nguyên lý thiết kế chuẩn của COMET & UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"A mechanism for sharing and reusing code between classes\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"A mechanism for inheriting characteristics from a parent\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: A mechanism for sharing and reusing code between classes. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"A mechanism for sharing data between classes\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"A mechanism for hiding information between classes\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 41,
    "image": "../Quiz10/Q41.webp",
    "question": "Which of the following is an entity class? An information hiding class",
    "options": [
      {
        "key": "A",
        "text": "subclass"
      },
      {
        "key": "B",
        "text": "control class"
      },
      {
        "key": "C",
        "text": "data abstraction class"
      },
      {
        "key": "D",
        "text": "None of the above"
      }
    ],
    "answer": "B",
    "hint": "Nguyên lý giấu thông tin của David Parnas: Che giấu những quyết định thiết kế có khả năng biến động trong tương lai.",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"control class\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"subclass\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: control class. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"data abstraction class\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"None of the above\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 42,
    "image": "../Quiz10/Q42.webp",
    "question": "Which of the following is unlikely to be a graphical user interface class?",
    "options": [
      {
        "key": "A",
        "text": "A menu"
      },
      {
        "key": "B",
        "text": "A window"
      },
      {
        "key": "C",
        "text": "A button"
      },
      {
        "key": "D",
        "text": "A pin"
      }
    ],
    "answer": "B",
    "hint": "Đọc kỹ các từ khóa chuyên ngành trong câu hỏi để đối chiếu với các nguyên lý thiết kế chuẩn của COMET & UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"A window\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"A menu\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: A window. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"A button\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"A pin\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 43,
    "image": "../Quiz10/Q43.webp",
    "question": "What is a key characteristic of a state-machine class as described in the context?",
    "options": [
      {
        "key": "A",
        "text": "It exposes the contents of the state transition table for easy access."
      },
      {
        "key": "B",
        "text": "It encapsulates the statechart information and hides the state transition table."
      },
      {
        "key": "C",
        "text": "It allows multiple statecharts to share the same state-machine class without modifications."
      },
      {
        "key": "D",
        "text": "It does not provide operations for processing incoming events"
      }
    ],
    "answer": "B",
    "hint": "Hãy chú ý sự kích hoạt của Sự kiện (Event), điều kiện canh giữ (Guard Condition) và Hành động (Action).",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"It encapsulates the statechart information and hides the state transition table.\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"It exposes the contents of the state transition table for easy access.\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: It encapsulates the statechart information and hides the state transition table.. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"It allows multiple statecharts to share the same state-machine class without modifications.\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"It does not provide operations for processing incoming events\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 44,
    "image": "../Quiz10/Q44.webp",
    "question": "With polymorphism and dynamic binding, an object can:",
    "options": [
      {
        "key": "A",
        "text": "Invoke operation of different names on the same objects."
      },
      {
        "key": "B",
        "text": "Invoke operations of different names on different objects."
      },
      {
        "key": "C",
        "text": "Invoke an operation of the same name on the same object"
      },
      {
        "key": "D",
        "text": "Invoke an operation of the same name on different objects."
      }
    ],
    "answer": "B",
    "hint": "Đọc kỹ các từ khóa chuyên ngành trong câu hỏi để đối chiếu với các nguyên lý thiết kế chuẩn của COMET & UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"Invoke operations of different names on different objects.\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"Invoke operation of different names on the same objects.\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: Invoke operations of different names on different objects.. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"Invoke an operation of the same name on the same object\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"Invoke an operation of the same name on different objects.\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 45,
    "image": "../Quiz10/Q45.webp",
    "question": "What is a database wrapper class?",
    "options": [
      {
        "key": "A",
        "text": "A class that encapsulates a data structure"
      },
      {
        "key": "B",
        "text": "A class that encapsulates a database"
      },
      {
        "key": "C",
        "text": "A class that encapsulates the details of how to access data in a database"
      },
      {
        "key": "D",
        "text": "A class that encapsulates a relational table"
      }
    ],
    "answer": "B",
    "hint": "Đọc kỹ các từ khóa chuyên ngành trong câu hỏi để đối chiếu với các nguyên lý thiết kế chuẩn của COMET & UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"A class that encapsulates a database\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"A class that encapsulates a data structure\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: A class that encapsulates a database. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"A class that encapsulates the details of how to access data in a database\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"A class that encapsulates a relational table\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 46,
    "image": "../Quiz10/Q46.webp",
    "question": "What is a primary concern when designing service-oriented architectures (SOA)?",
    "options": [
      {
        "key": "A",
        "text": "Loose coupling between components for flexibility"
      },
      {
        "key": "B",
        "text": "Tight coupling for better performance"
      },
      {
        "key": "C",
        "text": "Centralized database structure"
      },
      {
        "key": "D",
        "text": "Reducing the use of APIs"
      }
    ],
    "answer": "B",
    "hint": "Dịch vụ trong SOA có tính độc lập (autonomous), tái sử dụng (reusable), phát hiện được (discoverable) và ghép lỏng (loosely coupled).",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"Tight coupling for better performance\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"Loose coupling between components for flexibility\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: Tight coupling for better performance. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"Centralized database structure\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"Reducing the use of APIs\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 47,
    "image": "../Quiz10/Q47.webp",
    "question": "With a Negotiation pattern, which of the following is NOT true?",
    "options": [
      {
        "key": "A",
        "text": "The client agent can propose a service."
      },
      {
        "key": "B",
        "text": "The service agent can offer a service in response to a client agent proposal."
      },
      {
        "key": "C",
        "text": "The client agent can request a service."
      },
      {
        "key": "D",
        "text": "The service agent can offer a service in response to a client agent request"
      }
    ],
    "answer": "B",
    "hint": "Xác định mục đích cốt lõi của mẫu thiết kế: Tạo lập (Creational), Cấu trúc (Structural) hay Hành vi (Behavioral).",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"The service agent can offer a service in response to a client agent proposal.\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"The client agent can propose a service.\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: The service agent can offer a service in response to a client agent proposal.. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"The client agent can request a service.\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"The service agent can offer a service in response to a client agent request\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 48,
    "image": "../Quiz10/Q48.webp",
    "question": "What is a key characteristic of SOA?",
    "options": [
      {
        "key": "A",
        "text": "Services are dependent on each other"
      },
      {
        "key": "B",
        "text": "Services are autonomous"
      },
      {
        "key": "C",
        "text": "Services are not reusable"
      },
      {
        "key": "D",
        "text": "_ Services are tightly integrated"
      }
    ],
    "answer": "B",
    "hint": "Dịch vụ trong SOA có tính độc lập (autonomous), tái sử dụng (reusable), phát hiện được (discoverable) và ghép lỏng (loosely coupled).",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"Services are autonomous\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"Services are dependent on each other\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: Services are autonomous. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"Services are not reusable\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"_ Services are tightly integrated\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 49,
    "image": "../Quiz10/Q49.webp",
    "question": "What is an advantage of component-based architecture?",
    "options": [
      {
        "key": "A",
        "text": "Increased development time"
      },
      {
        "key": "B",
        "text": "Reduced reusability"
      },
      {
        "key": "C",
        "text": "Enhanced maintainability"
      },
      {
        "key": "D",
        "text": "_ Decreased modularity"
      }
    ],
    "answer": "B",
    "hint": "Đọc kỹ các từ khóa chuyên ngành trong câu hỏi để đối chiếu với các nguyên lý thiết kế chuẩn của COMET & UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"Reduced reusability\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"Increased development time\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: Reduced reusability. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"Enhanced maintainability\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"_ Decreased modularity\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 50,
    "image": "../Quiz10/Q50.webp",
    "question": "What is the primary goal of Component-Based Software Architecture (CBSA)?",
    "options": [
      {
        "key": "A",
        "text": "To create monolithic applications"
      },
      {
        "key": "B",
        "text": "To enable reuse of software components"
      },
      {
        "key": "C",
        "text": "To improve hardware efficiency"
      },
      {
        "key": "D",
        "text": "To simplify the user interface design"
      }
    ],
    "answer": "B",
    "hint": "Đọc kỹ các từ khóa chuyên ngành trong câu hỏi để đối chiếu với các nguyên lý thiết kế chuẩn của COMET & UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"To enable reuse of software components\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"To create monolithic applications\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: To enable reuse of software components. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"To improve hardware efficiency\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"To simplify the user interface design\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 51,
    "image": "../Quiz10/Q51.webp",
    "question": "What does a component's provided interface consist of?",
    "options": [
      {
        "key": "A",
        "text": "The operations that a component must fulfill"
      },
      {
        "key": "B",
        "text": "The operations inside a component"
      },
      {
        "key": "C",
        "text": "The operations that a component uses"
      },
      {
        "key": "D",
        "text": "The operations of a component"
      }
    ],
    "answer": "B",
    "hint": "Đọc kỹ các từ khóa chuyên ngành trong câu hỏi để đối chiếu với các nguyên lý thiết kế chuẩn của COMET & UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"The operations inside a component\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"The operations that a component must fulfill\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: The operations inside a component. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"The operations that a component uses\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"The operations of a component\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 52,
    "image": "../Quiz10/Q52.webp",
    "question": "What is the difference between an active object and a passive object in Concurrent and Real-Time Software Architecture?",
    "options": [
      {
        "key": "A",
        "text": "An active object controls a passive object"
      },
      {
        "key": "B",
        "text": "An active object does not have a thread of control; a passive object has a thread of control."
      },
      {
        "key": "C",
        "text": "An active object executes in a distributed system; a passive object executes in a centralized system."
      },
      {
        "key": "D",
        "text": "An active object has a thread of control; a passive object does not have a thread of control"
      }
    ],
    "answer": "B",
    "hint": "Đọc kỹ các từ khóa chuyên ngành trong câu hỏi để đối chiếu với các nguyên lý thiết kế chuẩn của COMET & UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"An active object does not have a thread of control; a passive object has a thread of control.\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"An active object controls a passive object\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: An active object does not have a thread of control; a passive object has a thread of control.. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"An active object executes in a distributed system; a passive object executes in a centralized system.\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"An active object has a thread of control; a passive object does not have a thread of control\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 53,
    "image": "../Quiz10/Q53.webp",
    "question": "What is a periodic task?",
    "options": [
      {
        "key": "A",
        "text": "A task that responds to each message it receives"
      },
      {
        "key": "B",
        "text": "A task that is activated by a timer event"
      },
      {
        "key": "C",
        "text": "A task that is activated by an external event"
      },
      {
        "key": "D",
        "text": "A task that is activated by an input event"
      }
    ],
    "answer": "B",
    "hint": "Đọc kỹ các từ khóa chuyên ngành trong câu hỏi để đối chiếu với các nguyên lý thiết kế chuẩn của COMET & UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"A task that is activated by a timer event\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"A task that responds to each message it receives\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: A task that is activated by a timer event. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"A task that is activated by an external event\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"A task that is activated by an input event\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 54,
    "image": "../Quiz10/Q54.webp",
    "question": "Which of the following is true for a Distributed Control architectural pattern?",
    "options": [
      {
        "key": "A",
        "text": "Control is divided among various control components."
      },
      {
        "key": "B",
        "text": "It responds to multiple requests from client subsystems."
      },
      {
        "key": "C",
        "text": "It provides overall control by coordinating several control components."
      },
      {
        "key": "D",
        "text": "It provides distributed control over various 1/0 objects."
      }
    ],
    "answer": "B",
    "hint": "Xác định mục đích cốt lõi của mẫu thiết kế: Tạo lập (Creational), Cấu trúc (Structural) hay Hành vi (Behavioral).",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"It responds to multiple requests from client subsystems.\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"Control is divided among various control components.\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: It responds to multiple requests from client subsystems.. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"It provides overall control by coordinating several control components.\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"It provides distributed control over various 1/0 objects.\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 55,
    "image": "../Quiz10/Q55.webp",
    "question": "What is a use case variation point?",
    "options": [
      {
        "key": "A",
        "text": "A variable use case"
      },
      {
        "key": "B",
        "text": "A location in the use case at which change can occur"
      },
      {
        "key": "C",
        "text": "An alternative use case"
      },
      {
        "key": "D",
        "text": "A location in the use case where an alternative path can start"
      }
    ],
    "answer": "B",
    "hint": "Đọc kỹ các từ khóa chuyên ngành trong câu hỏi để đối chiếu với các nguyên lý thiết kế chuẩn của COMET & UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"A location in the use case at which change can occur\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"A variable use case\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: A location in the use case at which change can occur. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"An alternative use case\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"A location in the use case where an alternative path can start\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 56,
    "image": "../Quiz10/Q56.webp",
    "question": "How are feature conditions used in a SPL state machine?",
    "options": [
      {
        "key": "A",
        "text": "A guard condition"
      },
      {
        "key": "B",
        "text": "A condition that is True or False"
      },
      {
        "key": "C",
        "text": "To identify' if a feature is selected or not in the state machine"
      },
      {
        "key": "D",
        "text": "To allow state machine inheritance"
      }
    ],
    "answer": "B",
    "hint": "Dòng sản phẩm phần mềm (SPL) phân biệt rõ giữa thành phần cốt lõi (Kernel) và thành phần tùy chọn/thay thế (Variability).",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"A condition that is True or False\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"A guard condition\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: A condition that is True or False. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"To identify' if a feature is selected or not in the state machine\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"To allow state machine inheritance\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 57,
    "image": "../Quiz10/Q57.webp",
    "question": "What does the SPL software architecture describe?",
    "options": [
      {
        "key": "A",
        "text": "The software inside a family of buildings"
      },
      {
        "key": "B",
        "text": "The structure of a Client/Server product family"
      },
      {
        "key": "C",
        "text": "The overall structure of the software productline"
      },
      {
        "key": "D",
        "text": "The software product line classes and their relationships"
      }
    ],
    "answer": "B",
    "hint": "Dòng sản phẩm phần mềm (SPL) phân biệt rõ giữa thành phần cốt lõi (Kernel) và thành phần tùy chọn/thay thế (Variability).",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"The structure of a Client/Server product family\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"The software inside a family of buildings\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: The structure of a Client/Server product family. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"The overall structure of the software productline\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"The software product line classes and their relationships\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 58,
    "image": "../Quiz10/Q58.webp",
    "question": "What do software quality attributes address?",
    "options": [
      {
        "key": "A",
        "text": "Software functional requirements"
      },
      {
        "key": "B",
        "text": "Software nonfunctional requirements"
      },
      {
        "key": "C",
        "text": "Software performance requirements"
      },
      {
        "key": "D",
        "text": "_ Software availability requirements"
      }
    ],
    "answer": "B",
    "hint": "Đọc kỹ các từ khóa chuyên ngành trong câu hỏi để đối chiếu với các nguyên lý thiết kế chuẩn của COMET & UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"Software nonfunctional requirements\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"Software functional requirements\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: Software nonfunctional requirements. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"Software performance requirements\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"_ Software availability requirements\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 59,
    "image": "../Quiz10/Q59.webp",
    "question": "Which of the following is not performance-related?",
    "options": [
      {
        "key": "A",
        "text": "System response time"
      },
      {
        "key": "B",
        "text": "System throughput"
      },
      {
        "key": "C",
        "text": "System availability"
      },
      {
        "key": "D",
        "text": "_ System capacity"
      }
    ],
    "answer": "B",
    "hint": "Đọc kỹ các từ khóa chuyên ngành trong câu hỏi để đối chiếu với các nguyên lý thiết kế chuẩn của COMET & UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"System throughput\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"System response time\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: System throughput. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"System availability\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"_ System capacity\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  },
  {
    "id": 60,
    "image": "../Quiz10/Q60.webp",
    "question": "Which of the following is considered a software quality attribute?",
    "options": [
      {
        "key": "A",
        "text": "File organization"
      },
      {
        "key": "B",
        "text": "Code syntax"
      },
      {
        "key": "C",
        "text": "Maintainability"
      },
      {
        "key": "D",
        "text": "user interface design"
      }
    ],
    "answer": "B",
    "hint": "Đọc kỹ các từ khóa chuyên ngành trong câu hỏi để đối chiếu với các nguyên lý thiết kế chuẩn của COMET & UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"Code syntax\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET (Hassan Gomaa), đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"File organization\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "B": "ĐÚNG: Code syntax. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và tài liệu kiến trúc phần mềm.",
        "C": "Sai: \"Maintainability\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác.",
        "D": "Sai: \"user interface design\". Phương án này không phù hợp với ngữ cảnh câu hỏi hoặc mô tả đặc tính của khái niệm khác."
      }
    }
  }
];
