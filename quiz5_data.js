window.QUIZ5_DATA = [
    {
        "id": 1,
        "image": "../Quiz5/Q1.webp",
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
        "hint": "Căn cứ chuẩn theo giáo trình Software Modeling and Design (Hassan Gomaa) Chương 7: Static Modeling.",
        "explanation": {
            "summary": "Đáp án chính xác theo đáp án chính thức của tác giả Hassan Gomaa (Chương 7: Static Modeling, Câu 7): \"A strong form of a whole/part relationship\".",
            "breakdown": {
                "A": "Sai: A weak form of a generalization/specialization hierarchy. Lựa chọn này không phản ánh đúng định nghĩa/khái niệm của giáo trình.",
                "B": "Sai: A strong form of a generalization/specialization hierarchy. Lựa chọn này không phản ánh đúng định nghĩa/khái niệm của giáo trình.",
                "C": "Sai: A weak form of a whole/part relationship. Lựa chọn này không phản ánh đúng định nghĩa/khái niệm của giáo trình.",
                "D": "ĐÚNG: A strong form of a whole/part relationship. Khẳng định chuẩn xác theo giáo trình của Hassan Gomaa."
            }
        }
    },
    {
        "id": 2,
        "image": "../Quiz5/Q2.webp",
        "question": "What is a unary association in UML?",
        "options": [
            {
                "key": "A",
                "text": "An association between objects of different classes"
            },
            {
                "key": "B",
                "text": "An association between objects of the same class"
            },
            {
                "key": "C",
                "text": "An association between an object and an external system"
            },
            {
                "key": "D",
                "text": "An association that does not involve any objects"
            }
        ],
        "answer": "B",
        "hint": "Gợi ý: Căn cứ theo nguyên lý kiến trúc chuẩn trong Hassan Gomaa Ch 7 (Static Modeling).",
        "explanation": {
            "summary": "Unary association (tự kết hợp) là mối liên kết giữa các đối tượng trong cùng một lớp (same class).",
            "breakdown": {
                "A": "Sai: An association between objects of different classes. Không phù hợp với nguyên lý thiết kế.",
                "B": "ĐÚNG: An association between objects of the same class. Khẳng định chuẩn xác theo Hassan Gomaa Ch 7 (Static Modeling).",
                "C": "Sai: An association between an object and an external system. Không phù hợp với nguyên lý thiết kế.",
                "D": "Sai: An association that does not involve any objects. Không phù hợp với nguyên lý thiết kế."
            }
        }
    },
    {
        "id": 3,
        "image": "../Quiz5/Q3.webp",
        "question": "In the example \"Employee Works in Department,\" which of the following represents the association? A",
        "options": [
            {
                "key": "A",
                "text": "Employee"
            },
            {
                "key": "B",
                "text": "Department"
            },
            {
                "key": "C",
                "text": "Works in"
            },
            {
                "key": "D",
                "text": "Both Employee and Department"
            }
        ],
        "answer": "C",
        "hint": "Tên của liên kết thường là động từ hoặc cụm động từ mô tả hành động giữa hai lớp.",
        "explanation": {
            "summary": "Trong ví dụ \"Employee Works in Department\", \"Works in\" là tên của Association (mối quan hệ liên kết) giữa hai lớp Employee và Department.",
            "breakdown": {
                "A": "Sai: Employee là tên lớp (Class/Entity).",
                "B": "Sai: Department là tên lớp.",
                "C": "ĐÚNG: \"Works in\" biểu diễn động từ mối quan hệ (Association).",
                "D": "Sai: Cả hai là các lớp tham gia liên kết, không phải là liên kết."
            }
        }
    },
    {
        "id": 4,
        "image": "../Quiz5/Q4.webp",
        "question": "Which design pattern is frequently applied to handle event notifications in the Emergency Monitoring System?",
        "options": [
            {
                "key": "A",
                "text": "Observer pattern"
            },
            {
                "key": "B",
                "text": "Strategy pattern"
            },
            {
                "key": "C",
                "text": "Factory method pattern"
            },
            {
                "key": "D",
                "text": "_ Decorator pattern"
            }
        ],
        "answer": "A",
        "hint": "Mẫu thiết kế nào cho phép thông báo sự kiện (event notification) tức thời đến nhiều đối tượng quan sát?",
        "explanation": {
            "summary": "Trong Emergency Monitoring System (EMS), Observer Pattern (hoặc Publisher/Subscriber) được sử dụng rộng rãi để thông báo các sự kiện cảnh báo y tế tới các màn hình theo dõi và thiết bị của y bác sĩ.",
            "breakdown": {
                "A": "ĐÚNG: Observer pattern chuyên quản lý việc phát và lắng nghe thông báo sự kiện tự động.",
                "B": "Sai: Strategy đóng gói thuật toán hoán đổi được.",
                "C": "Sai: Factory Method quản lý việc tạo đối tượng.",
                "D": "Sai: Decorator mở rộng hành vi động cho đối tượng."
            }
        }
    },
    {
        "id": 5,
        "image": "../Quiz5/Q5.webp",
        "question": "Which system is commonly used as a case study example for illustrating banking transaction processing?",
        "options": [
            {
                "key": "A",
                "text": "Emergency Monitoring System"
            },
            {
                "key": "B",
                "text": "ATM System"
            },
            {
                "key": "C",
                "text": "Online Shopping System"
            },
            {
                "key": "D",
                "text": "Inventory Management System"
            }
        ],
        "answer": "C",
        "hint": "Gợi ý: Đọc kỹ các từ khóa chuyên ngành trong đề bài và đối chiếu với giáo trình SWD392 và phương pháp COMET của Hassan Gomaa.",
        "explanation": {
            "summary": "Đáp án chính xác là [C]: \"Online Shopping System\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế kiến trúc phần mềm.",
            "breakdown": {
                "A": "Sai: \"Emergency Monitoring System\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
                "B": "Sai: \"ATM System\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
                "C": "ĐÚNG: Online Shopping System. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
                "D": "Sai: \"Inventory Management System\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
            }
        }
    },
    {
        "id": 6,
        "image": "../Quiz5/Q6.webp",
        "question": "What is the role of a service broker in SOA?",
        "options": [
            {
                "key": "A",
                "text": "To host services"
            },
            {
                "key": "B",
                "text": "To find and connect services"
            },
            {
                "key": "C",
                "text": "To provide user interfaces"
            },
            {
                "key": "D",
                "text": "To manage transactions"
            }
        ],
        "answer": "B",
        "hint": "Gợi ý: Căn cứ theo nguyên lý kiến trúc chuẩn trong Hassan Gomaa Ch 16 (SOA).",
        "explanation": {
            "summary": "Service Broker đóng vai trò như danh bạ (registry) để tìm kiếm (find) và kết nối các dịch vụ.",
            "breakdown": {
                "A": "Sai: To host services. Không phù hợp với nguyên lý thiết kế.",
                "B": "ĐÚNG: To find and connect services. Khẳng định chuẩn xác theo Hassan Gomaa Ch 16 (SOA).",
                "C": "Sai: To provide user interfaces. Không phù hợp với nguyên lý thiết kế.",
                "D": "Sai: To manage transactions. Không phù hợp với nguyên lý thiết kế."
            }
        }
    },
    {
        "id": 7,
        "image": "../Quiz5/Q7.webp",
        "question": "Which case study involves monitoring patient conditions in a healthcare environment?",
        "options": [
            {
                "key": "A",
                "text": "ATM System"
            },
            {
                "key": "B",
                "text": "Online Shopping System"
            },
            {
                "key": "C",
                "text": "Emergency Monitoring System"
            },
            {
                "key": "D",
                "text": "Library Management System"
            }
        ],
        "answer": "C",
        "hint": "Gợi ý: Căn cứ theo nguyên lý kiến trúc chuẩn trong Hassan Gomaa Ch 22 (Case Studies).",
        "explanation": {
            "summary": "Emergency Monitoring System (EMS) là ca điển hình theo dõi tình trạng bệnh nhân trong y tế.",
            "breakdown": {
                "A": "Sai: ATM System. Không phù hợp với nguyên lý thiết kế.",
                "B": "Sai: Online Shopping System. Không phù hợp với nguyên lý thiết kế.",
                "C": "ĐÚNG: Emergency Monitoring System. Khẳng định chuẩn xác theo Hassan Gomaa Ch 22 (Case Studies).",
                "D": "Sai: Library Management System. Không phù hợp với nguyên lý thiết kế."
            }
        }
    },
    {
        "id": 8,
        "image": "../Quiz5/Q8.webp",
        "question": "What is a subsystem in software architecture?",
        "options": [
            {
                "key": "A",
                "text": "A hardware module."
            },
            {
                "key": "B",
                "text": "A single database."
            },
            {
                "key": "C",
                "text": "A logical module grouping related functionality."
            },
            {
                "key": "D",
                "text": "Only the user interface."
            }
        ],
        "answer": "C",
        "hint": "Gợi ý: Căn cứ theo nguyên lý kiến trúc chuẩn trong Hassan Gomaa Ch 13 (Subsystem Design).",
        "explanation": {
            "summary": "Subsystem là một module logic gom nhóm các chức năng liên quan mật thiết với nhau (separation of concerns).",
            "breakdown": {
                "A": "Sai: A hardware module.. Không phù hợp với nguyên lý thiết kế.",
                "B": "Sai: A single database.. Không phù hợp với nguyên lý thiết kế.",
                "C": "ĐÚNG: A logical module grouping related functionality.. Khẳng định chuẩn xác theo Hassan Gomaa Ch 13 (Subsystem Design).",
                "D": "Sai: Only the user interface.. Không phù hợp với nguyên lý thiết kế."
            }
        }
    },
    {
        "id": 9,
        "image": "../Quiz5/Q9.webp",
        "question": "What is the main goal when applying the principle of separation of concerns in subsystem design?",
        "options": [
            {
                "key": "A",
                "text": "To make subsystems more interconnected"
            },
            {
                "key": "B",
                "text": "To assign multiple concerns to each subsystem"
            },
            {
                "key": "C",
                "text": "To ensure each subsystem addresses a distinct concern"
            },
            {
                "key": "D",
                "text": "To combine all subsystems into one aggregate object"
            }
        ],
        "answer": "C",
        "hint": "Nguyên tắc Separation of Concerns (phân tách mối quan tâm) nhằm đảm bảo mỗi hệ thống con tập trung vào một trách nhiệm cụ thể.",
        "explanation": {
            "summary": "Separation of Concerns trong thiết kế kiến trúc phân rã hệ thống thành các subsystem độc lập, mỗi subsystem giải quyết một khía cạnh/mối quan tâm riêng biệt (distinct concern) để giảm sự phụ thuộc và tăng tính gắn kết.",
            "breakdown": {
                "A": "Sai: Phân tách mối quan tâm làm giảm độ phụ thuộc (loose coupling), không làm tăng interconnection.",
                "B": "Sai: Mỗi subsystem chỉ nên giải quyết mối quan tâm riêng biệt.",
                "C": "ĐÚNG: Đảm bảo mỗi subsystem giải quyết một mối quan tâm riêng biệt (distinct concern).",
                "D": "Sai: Gom tất cả vào một aggregate object đi ngược lại nguyên lý module hóa."
            }
        }
    },
    {
        "id": 10,
        "image": "../Quiz5/Q10.webp",
        "question": "What is information hiding in software design?",
        "options": [
            {
                "key": "A",
                "text": "Hiding information so that it cannot be found"
            },
            {
                "key": "B",
                "text": "Hiding a design decision that is considered likely to change"
            },
            {
                "key": "C",
                "text": "Hiding information to make it secure"
            },
            {
                "key": "D",
                "text": "Encapsulating data in a class"
            }
        ],
        "answer": "B",
        "hint": "Gợi ý: Căn cứ theo nguyên lý kiến trúc chuẩn trong Hassan Gomaa Ch 4 (Design Concepts).",
        "explanation": {
            "summary": "Nguyên lý giấu thông tin của David Parnas: Che giấu những quyết định thiết kế có khả năng biến động trong tương lai.",
            "breakdown": {
                "A": "Sai: Hiding information so that it cannot be found. Không phù hợp với nguyên lý thiết kế.",
                "B": "ĐÚNG: Hiding a design decision that is considered likely to change. Khẳng định chuẩn xác theo Hassan Gomaa Ch 4 (Design Concepts).",
                "C": "Sai: Hiding information to make it secure. Không phù hợp với nguyên lý thiết kế.",
                "D": "Sai: Encapsulating data in a class. Không phù hợp với nguyên lý thiết kế."
            }
        }
    },
    {
        "id": 11,
        "image": "../Quiz5/Q11.webp",
        "question": "What is an operation (also known as method) of a class?",
        "options": [
            {
                "key": "A",
                "text": "Specification and the implementation of a function performed by a class"
            },
            {
                "key": "B",
                "text": "Specification and the implementation of a subroutine provided by a class"
            },
            {
                "key": "C",
                "text": "Specification and the implementation of a function or procedure provided by a class"
            },
            {
                "key": "D",
                "text": "Specification and the implementation of an interface provided by a class"
            }
        ],
        "answer": "C",
        "hint": "Căn cứ chuẩn theo giáo trình Software Modeling and Design (Hassan Gomaa) Chương 4: Software Design and Architecture Concepts.",
        "explanation": {
            "summary": "Đáp án chính xác theo đáp án chính thức của tác giả Hassan Gomaa (Chương 4: Software Design and Architecture Concepts, Câu 4): \"Specification and the implementation of a function or procedure provided by a class\".",
            "breakdown": {
                "A": "Sai: Specification and the implementation of a function performed by a class. Lựa chọn này không phản ánh đúng định nghĩa/khái niệm của giáo trình.",
                "B": "Sai: Specification and the implementation of a subroutine provided by a class. Lựa chọn này không phản ánh đúng định nghĩa/khái niệm của giáo trình.",
                "C": "ĐÚNG: Specification and the implementation of a function or procedure provided by a class. Khẳng định chuẩn xác theo giáo trình của Hassan Gomaa.",
                "D": "Sai: Specification and the implementation of an interface provided by a class. Lựa chọn này không phản ánh đúng định nghĩa/khái niệm của giáo trình."
            }
        }
    },
    {
        "id": 12,
        "image": "../Quiz5/Q12.webp",
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
        "hint": "Gợi ý: Chú ý kỹ các thuật ngữ kiến trúc chuẩn mực theo phương pháp COMET của Hassan Gomaa và tiêu chuẩn UML.",
        "explanation": {
            "summary": "Đáp án chính xác là [B]: \"mechanism for sharing and reusing code between classes\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
            "breakdown": {
                "A": "Sai: \"A mechanism for inheriting characteristics from a parent\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
                "B": "ĐÚNG: mechanism for sharing and reusing code between classes. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
                "C": "Sai: \"A mechanism for sharing data between classes\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
                "D": "Sai: \"A mechanism for hiding information bet'.veen classes exam.\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
            }
        }
    },
    {
        "id": 13,
        "image": "../Quiz5/Q13.webp",
        "question": "What is a condition used for in a state machine?",
        "options": [
            {
                "key": "A",
                "text": "conditional action"
            },
            {
                "key": "B",
                "text": "conditional state"
            },
            {
                "key": "C",
                "text": "conditional state transition"
            },
            {
                "key": "D",
                "text": "conditional event"
            }
        ],
        "answer": "C",
        "hint": "Gợi ý: Hãy phân biệt giữa Sự kiện kích hoạt (Event), Điều kiện canh giữ (Guard) và Hành động được thực thi (Action/Transition).",
        "explanation": {
            "summary": "Đáp án chính xác là [C]: \"conditional state transition\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là chuẩn mực lý thuyết đã được khẳng định trong thiết kế và mô hình hóa kiến trúc phần mềm.",
            "breakdown": {
                "A": "Sai: \"conditional action\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
                "B": "Sai: \"conditional state\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
                "C": "ĐÚNG: conditional state transition. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
                "D": "Sai: \"conditional event\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
            }
        }
    },
    {
        "id": 14,
        "image": "../Quiz5/Q14.webp",
        "question": "Which UML diagram is primarily used for modeling relationships between classes and interfaces?",
        "options": [
            {
                "key": "A",
                "text": "Statechart Diagram"
            },
            {
                "key": "B",
                "text": "Class Diagram"
            },
            {
                "key": "C",
                "text": "Activity Diagram"
            },
            {
                "key": "D",
                "text": "Deployment Diagram"
            }
        ],
        "answer": "B",
        "hint": "Biểu đồ cấu trúc nào trong UML thể hiện các lớp, interface và các mối liên kết giữa chúng?",
        "explanation": {
            "summary": "Class Diagram (biểu đồ lớp) là biểu đồ tĩnh chính trong UML được dùng để mô hình hóa các lớp, interface và các quan hệ cấu trúc (association, generalization, realization).",
            "breakdown": {
                "A": "Sai: Statechart biểu diễn máy trạng thái.",
                "B": "ĐÚNG: Class Diagram mô hình hóa các mối quan hệ tĩnh giữa classes và interfaces.",
                "C": "Sai: Activity Diagram mô hình hóa quy trình/luồng hoạt động.",
                "D": "Sai: Deployment Diagram mô hình hóa kiến trúc phần cứng vật lý."
            }
        }
    },
    {
        "id": 15,
        "image": "../Quiz5/Q15.webp",
        "question": "If actions are shown on a given state transition, which of the following is true?",
        "options": [
            {
                "key": "A",
                "text": "The buo actions are dependent on each other."
            },
            {
                "key": "B",
                "text": "The buo actions are independent of each other."
            },
            {
                "key": "C",
                "text": "One action provides an input to the other action."
            },
            {
                "key": "D",
                "text": "The second action executes when the first action completes execution."
            }
        ],
        "answer": "B",
        "hint": "Căn cứ chuẩn theo giáo trình Software Modeling and Design (Hassan Gomaa) Chương 10: Finite State Machines.",
        "explanation": {
            "summary": "Đáp án chính xác theo đáp án chính thức của tác giả Hassan Gomaa (Chương 10: Finite State Machines, Câu 10): \"The buo actions are independent of each other.\".",
            "breakdown": {
                "A": "Sai: The buo actions are dependent on each other.. Lựa chọn này không phản ánh đúng định nghĩa/khái niệm của giáo trình.",
                "B": "ĐÚNG: The buo actions are independent of each other.. Khẳng định chuẩn xác theo giáo trình của Hassan Gomaa.",
                "C": "Sai: One action provides an input to the other action.. Lựa chọn này không phản ánh đúng định nghĩa/khái niệm của giáo trình.",
                "D": "Sai: The second action executes when the first action completes execution.. Lựa chọn này không phản ánh đúng định nghĩa/khái niệm của giáo trình."
            }
        }
    },
    {
        "id": 16,
        "image": "../Quiz5/Q16.webp",
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
        "answer": "A",
        "hint": "Một lớp có thể chứa định nghĩa cài đặt phương thức, trong khi interface truyền thống chỉ khai báo chữ ký phương thức.",
        "explanation": {
            "summary": "Sự khác biệt cốt lõi: Class có thể chứa thân hàm cài đặt (implementations), trong khi Interface chỉ khai báo đặc tả thao tác mà không chứa mã thực thi chi tiết (theo chuẩn OOP/UML).",
            "breakdown": {
                "A": "ĐÚNG: Class chứa cài đặt của phương thức, trong khi interface chỉ định nghĩa hợp đồng hành vi.",
                "B": "Sai: Cả class và interface đều có thể kế thừa/mở rộng.",
                "C": "Sai: Khái niệm bị đảo ngược.",
                "D": "Sai: Phương án A là đáp án chính xác."
            }
        }
    },
    {
        "id": 17,
        "image": "../Quiz5/Q17.webp",
        "question": "Which of the following is not included in the main object and class structuring categories?",
        "options": [
            {
                "key": "A",
                "text": "Entity object"
            },
            {
                "key": "B",
                "text": "Boundary object"
            },
            {
                "key": "C",
                "text": "Control object"
            },
            {
                "key": "D",
                "text": "user object"
            }
        ],
        "answer": "D",
        "hint": "Theo COMET, 3 nhóm đối tượng cơ bản gồm Entity, Boundary và Control. Nhóm nào không nằm trong phân loại này?",
        "explanation": {
            "summary": "Theo phương pháp COMET của Hassan Gomaa, các đối tượng phân tích được phân loại thành 3 nhóm chính: Entity objects, Boundary objects, và Control objects. Không có loại \"User object\".",
            "breakdown": {
                "A": "Sai: Entity object là nhóm chính lưu trữ dữ liệu.",
                "B": "Sai: Boundary object là nhóm chính giao tiếp bên ngoài.",
                "C": "Sai: Control object là nhóm chính điều phối xử lý.",
                "D": "ĐÚNG: User object không thuộc danh mục phân loại đối tượng chuẩn của COMET."
            }
        }
    },
    {
        "id": 18,
        "image": "../Quiz5/Q18.webp",
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
        "hint": "Khái niệm nào thuộc về lập trình hướng thủ tục truyền thống chứ không phải đặc trưng của lập trình hướng đối tượng?",
        "explanation": {
            "summary": "Subroutine (chương trình con/thủ tục) là thuật ngữ cơ bản của lập trình hướng thủ tục (procedural programming). OOP đặc trưng bởi Encapsulation, Class, Subclass, Inheritance, Polymorphism.",
            "breakdown": {
                "A": "Sai: Encapsulation (đóng gói) là trụ cột của OOP.",
                "B": "Sai: Class (lớp) là khái niệm cốt lõi của OOP.",
                "C": "Sai: Subclass (lớp con) thể hiện tính kế thừa trong OOP.",
                "D": "ĐÚNG: Subroutine là khái niệm của lập trình thủ tục cổ điển."
            }
        }
    },
    {
        "id": 19,
        "image": "../Quiz5/Q19.webp",
        "question": "In COMET, what is the first step in the software development process? A",
        "options": [
            {
                "key": "A",
                "text": "Requirements modeling"
            },
            {
                "key": "B",
                "text": "Incremental software construction"
            },
            {
                "key": "C",
                "text": "Design modeling"
            },
            {
                "key": "D",
                "text": "System testing"
            }
        ],
        "answer": "A",
        "hint": "Gợi ý: Căn cứ theo nguyên lý kiến trúc chuẩn trong Hassan Gomaa Ch 5 (Software Life Cycle).",
        "explanation": {
            "summary": "Bước đầu tiên trong quy trình phát triển/thiết kế phần mềm theo COMET là mô hình hóa yêu cầu (Requirements modeling / Requirements analysis).",
            "breakdown": {
                "A": "ĐÚNG: Requirements modeling. Khẳng định chuẩn xác theo Hassan Gomaa Ch 5 (Software Life Cycle).",
                "B": "Sai: Incremental software construction. Không phù hợp với nguyên lý thiết kế.",
                "C": "Sai: Design modeling. Không phù hợp với nguyên lý thiết kế.",
                "D": "Sai: System testing. Không phù hợp với nguyên lý thiết kế."
            }
        }
    },
    {
        "id": 20,
        "image": "../Quiz5/Q20.webp",
        "question": "Which of the following best describes the role of software quality atü-ibutes in architectural design?",
        "options": [
            {
                "key": "A",
                "text": "They provide guidelines for programming language syntax"
            },
            {
                "key": "B",
                "text": "They represent non-functional requirements that influence architectural choices"
            },
            {
                "key": "C",
                "text": "They describe database constraints only"
            },
            {
                "key": "D",
                "text": "They replace functional requirements"
            }
        ],
        "answer": "B",
        "hint": "Software quality attributes (thuộc tính chất lượng) phản ánh các yêu cầu phi chức năng chi phối quyết định kiến trúc.",
        "explanation": {
            "summary": "Các thuộc tính chất lượng phần mềm (như hiệu năng, bảo mật, khả năng mở rộng, bảo trì) là các yêu cầu phi chức năng (non-functional requirements) trực tiếp định hình và dẫn dắt các lựa chọn kiến trúc phần mềm.",
            "breakdown": {
                "A": "Sai: Thuộc tính chất lượng không quyết định cú pháp ngôn ngữ lập trình.",
                "B": "ĐÚNG: Chúng đại diện cho các yêu cầu phi chức năng ảnh hưởng sâu sắc đến lựa chọn kiến trúc.",
                "C": "Sai: Không chỉ giới hạn trong ràng buộc CSDL.",
                "D": "Sai: Chất lượng bổ trợ chứ không thay thế yêu cầu chức năng."
            }
        }
    },
    {
        "id": 21,
        "image": "../Quiz5/Q21.webp",
        "question": "Which architectural style is most suitable when system modules must be highly reusable and independently deployable?",
        "options": [
            {
                "key": "A",
                "text": "Monolithic"
            },
            {
                "key": "B",
                "text": "Service-Oriented Architecture (SOA)"
            },
            {
                "key": "C",
                "text": "_ Layered"
            },
            {
                "key": "D",
                "text": "_ Repository"
            }
        ],
        "answer": "B",
        "hint": "Kiến trúc nào đóng gói chức năng thành các dịch vụ độc lập nền tảng, có thể tái sử dụng và triển khai độc lập?",
        "explanation": {
            "summary": "Kiến trúc hướng dịch vụ (SOA - Service-Oriented Architecture) cấu trúc ứng dụng thành các dịch vụ tự trị (autonomous services) độc lập nền tảng, có khả năng tái sử dụng cao và triển khai độc lập.",
            "breakdown": {
                "A": "Sai: Monolithic là khối đơn nguyên liền mảnh, khó triển khai độc lập.",
                "B": "ĐÚNG: SOA cho phép tái sử dụng và triển khai các dịch vụ độc lập.",
                "C": "Sai: Layered phân tầng trong cùng một ứng dụng.",
                "D": "Sai: Repository là kiến trúc chia sẻ kho dữ liệu chung."
            }
        }
    },
    {
        "id": 22,
        "image": "../Quiz5/Q22.webp",
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
        "answer": "A",
        "hint": "Căn cứ chuẩn theo giáo trình Software Modeling and Design (Hassan Gomaa) Chương 11: State-Dependent Dynamic Interaction Modeling.",
        "explanation": {
            "summary": "Đáp án chính xác theo đáp án chính thức của tác giả Hassan Gomaa (Chương 11: State-Dependent Dynamic Interaction Modeling, Câu 3): \"An event on the internal state machine\".",
            "breakdown": {
                "A": "ĐÚNG: An event on the internal state machine. Khẳng định chuẩn xác theo giáo trình của Hassan Gomaa.",
                "B": "Sai: An action on the internal state machine. Lựa chọn này không phản ánh đúng định nghĩa/khái niệm của giáo trình.",
                "C": "Sai: A condition on the internal state machine. Lựa chọn này không phù hợp với chuẩn thiết kế của giáo trình.",
                "D": "Sai: A state on the internal state machine. Lựa chọn này không phù hợp với chuẩn thiết kế của giáo trình."
            }
        }
    },
    {
        "id": 23,
        "image": "../Quiz5/Q23.webp",
        "question": "When applying the Observer design pattern, which role is responsible for notifying all dependent objects about",
        "options": [
            {
                "key": "A",
                "text": "state change?"
            },
            {
                "key": "B",
                "text": "Observer"
            },
            {
                "key": "C",
                "text": "Subject"
            },
            {
                "key": "D",
                "text": "Mediator D. Adapter"
            }
        ],
        "answer": "C",
        "hint": "Gợi ý: Căn cứ theo nguyên lý kiến trúc chuẩn trong GoF Behavioral Patterns.",
        "explanation": {
            "summary": "Trong mẫu Observer, Subject lưu giữ danh sách và chịu trách nhiệm thông báo (notify) đến tất cả các Observer khi có thay đổi trạng thái.",
            "breakdown": {
                "A": "Sai: state change?. Không phù hợp với nguyên lý thiết kế.",
                "B": "Sai: Observer. Không phù hợp với nguyên lý thiết kế.",
                "C": "ĐÚNG: Subject. Khẳng định chuẩn xác theo GoF Behavioral Patterns.",
                "D": "Sai: Mediator D. Adapter. Không phù hợp với nguyên lý thiết kế."
            }
        }
    },
    {
        "id": 24,
        "image": "../Quiz5/Q24.webp",
        "question": "An input message to a state-dependent control object corresponds to:",
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
        "answer": "A",
        "hint": "Căn cứ chuẩn theo giáo trình Software Modeling and Design (Hassan Gomaa) Chương 11: State-Dependent Dynamic Interaction Modeling.",
        "explanation": {
            "summary": "Đáp án chính xác theo đáp án chính thức của tác giả Hassan Gomaa (Chương 11: State-Dependent Dynamic Interaction Modeling, Câu 3): \"An event on the internal state machine\".",
            "breakdown": {
                "A": "ĐÚNG: An event on the internal state machine. Khẳng định chuẩn xác theo giáo trình của Hassan Gomaa.",
                "B": "Sai: An action on the internal state machine. Lựa chọn này không phản ánh đúng định nghĩa/khái niệm của giáo trình.",
                "C": "Sai: A condition on the internal state machine. Lựa chọn này không phù hợp với chuẩn thiết kế của giáo trình.",
                "D": "Sai: A state on the internal state machine. Lựa chọn này không phù hợp với chuẩn thiết kế của giáo trình."
            }
        }
    },
    {
        "id": 25,
        "image": "../Quiz5/Q25.webp",
        "question": "What is the primary goal of Software Product Line Engineering?",
        "options": [
            {
                "key": "A",
                "text": "To develop a single software product that fits all market needs"
            },
            {
                "key": "B",
                "text": "To decrease software production costs by reducing the quality"
            },
            {
                "key": "C",
                "text": "To focus exclusively on the customization of software for individual customers"
            },
            {
                "key": "D",
                "text": "To create a set of software products sharing a common, managed set of features to satisfy specific market segments"
            }
        ],
        "answer": "D",
        "hint": "Dòng sản phẩm phần mềm (SPL) tạo ra một tập hợp các sản phẩm chia sẻ chung các tính năng cốt lõi để phục vụ từng phân khúc thị trường.",
        "explanation": {
            "summary": "Mục tiêu chính của Software Product Line Engineering (Kỹ nghệ dòng sản phẩm phần mềm) là xây dựng một họ sản phẩm chia sẻ chung một tập hợp các đặc tính/thành phần cốt lõi được quản lý (sharing a common, managed set of features) để đáp ứng các phân khúc thị trường cụ thể, giúp giảm chi phí và thời gian phát triển mà không làm giảm chất lượng.",
            "breakdown": {
                "A": "Sai: To develop a single software product that fits all market needs. SPL nhằm tạo ra một họ nhiều sản phẩm, không phải một sản phẩm đơn lẻ.",
                "B": "Sai: To decrease software production costs by reducing the quality. Lựa chọn này không phù hợp với chuẩn thiết kế của giáo trình.",
                "C": "Sai: To focus exclusively on the customization of software for individual customers. Đây là may đo riêng lẻ (one-off custom development), không phải SPL.",
                "D": "ĐÚNG: To create a set of software products sharing a common, managed set of features to satisfy specific market segments. Định nghĩa chuẩn xác về SPL trong Hassan Gomaa Chương 19."
            }
        }
    },
    {
        "id": 26,
        "image": "../Quiz5/Q26.webp",
        "question": "In the context of software product lines, what is 'Feature Modeling'?",
        "options": [
            {
                "key": "A",
                "text": "A technique for documenting software performance metrics"
            },
            {
                "key": "B",
                "text": "A process for creating graphical user interfaces for software products"
            },
            {
                "key": "C",
                "text": "A method for identifying and organizing the features common and variable across the product line"
            },
            {
                "key": "D",
                "text": "A strategy for reducing the number of features in software to minimize costs"
            }
        ],
        "answer": "C",
        "hint": "Feature Modeling trong SPL giúp nhận diện điểm chung và điểm biến đổi giữa các thành viên trong dòng sản phẩm.",
        "explanation": {
            "summary": "Feature Modeling (mô hình hóa tính năng) là kỹ thuật trọng tâm trong SPL để xác định, cấu trúc và quản lý các đặc tính chung (commonalities) và các đặc tính biến đổi (variabilities) giữa các sản phẩm.",
            "breakdown": {
                "A": "Sai: Không dùng để ghi nhận số liệu hiệu năng.",
                "B": "Sai: Không phải quy trình tạo giao diện người dùng.",
                "C": "ĐÚNG: Phương pháp nhận diện và tổ chức các tính năng chung và biến đổi trong dòng sản phẩm.",
                "D": "Sai: Không phải chiến lược cắt giảm tính năng."
            }
        }
    },
    {
        "id": 27,
        "image": "../Quiz5/Q27.webp",
        "question": "What is an optional use case?",
        "options": [
            {
                "key": "A",
                "text": "A use case with some optional steps"
            },
            {
                "key": "B",
                "text": "A use case that does not need to be developed"
            },
            {
                "key": "C",
                "text": "A use case that is required by some product line members but not others"
            },
            {
                "key": "D",
                "text": "A use case that can be chosen in place ofa different use case in a SPL member"
            }
        ],
        "answer": "C",
        "hint": "Căn cứ chuẩn theo giáo trình Software Modeling and Design (Hassan Gomaa) Chương 19: Designing Software Product Line Architectures.",
        "explanation": {
            "summary": "Đáp án chính xác theo đáp án chính thức của tác giả Hassan Gomaa (Chương 19: Designing Software Product Line Architectures, Câu 2): \"A use case that is required by some product line members but not others\".",
            "breakdown": {
                "A": "Sai: A use case with some optional steps. Lựa chọn này không phản ánh đúng định nghĩa/khái niệm của giáo trình.",
                "B": "Sai: A use case that does not need to be developed. Lựa chọn này không phản ánh đúng định nghĩa/khái niệm của giáo trình.",
                "C": "ĐÚNG: A use case that is required by some product line members but not others. Khẳng định chuẩn xác theo giáo trình của Hassan Gomaa.",
                "D": "Sai: A use case that can be chosen in place of a different use case in a SPL member. Lựa chọn này không phản ánh đúng định nghĩa/khái niệm của giáo trình."
            }
        }
    },
    {
        "id": 28,
        "image": "../Quiz5/Q28.webp",
        "question": "What are the Fuo kinds of UML interaction diagrams?",
        "options": [
            {
                "key": "A",
                "text": "Class diagram and sequence diagram"
            },
            {
                "key": "B",
                "text": "Sequence diagram and communication diagram"
            },
            {
                "key": "C",
                "text": "Class diagram and communication diagram"
            },
            {
                "key": "D",
                "text": "Statechart and communication diagram"
            }
        ],
        "answer": "B",
        "hint": "Hai loại biểu đồ tương tác chuẩn của UML mô tả chuỗi thông điệp giữa các đối tượng.",
        "explanation": {
            "summary": "Theo chuẩn UML và Hassan Gomaa, hai loại biểu đồ tương tác (interaction diagrams) chính là Sequence Diagram và Communication Diagram (trước đây là Collaboration diagram).",
            "breakdown": {
                "A": "Sai: Class diagram là biểu đồ tĩnh.",
                "B": "ĐÚNG: Sequence diagram và Communication diagram là 2 loại biểu đồ tương tác chuẩn.",
                "C": "Sai: Class diagram không phải biểu đồ tương tác.",
                "D": "Sai: Statechart là biểu đồ máy trạng thái."
            }
        }
    },
    {
        "id": 29,
        "image": "../Quiz5/Q29.webp",
        "question": "How is an association depicted on a class diagram?",
        "options": [
            {
                "key": "A",
                "text": "A solid line joining class boxes"
            },
            {
                "key": "B",
                "text": "A dashed line joining buo class boxes"
            },
            {
                "key": "C",
                "text": "A diamond touching the upper class box"
            },
            {
                "key": "D",
                "text": "An arrowhead touching the upper class box"
            }
        ],
        "answer": "A",
        "hint": "Căn cứ chuẩn theo giáo trình Software Modeling and Design (Hassan Gomaa) Chương 2: Overview of the UML Notation.",
        "explanation": {
            "summary": "Đáp án chính xác theo đáp án chính thức của tác giả Hassan Gomaa (Chương 2: Overview of the UML Notation, Câu 4): \"A solid line joining class boxes\".",
            "breakdown": {
                "A": "ĐÚNG: A solid line joining class boxes. Khẳng định chuẩn xác theo giáo trình của Hassan Gomaa.",
                "B": "Sai: A dashed line joining buo class boxes. Lựa chọn này không phản ánh đúng định nghĩa/khái niệm của giáo trình.",
                "C": "Sai: A diamond touching the upper class box. Lựa chọn này không phản ánh đúng định nghĩa/khái niệm của giáo trình.",
                "D": "Sai: An arrowhead touching the upper class box. Lựa chọn này không phản ánh đúng định nghĩa/khái niệm của giáo trình."
            }
        }
    },
    {
        "id": 30,
        "image": "../Quiz5/Q30.webp",
        "question": "What is the primary purpose of a use case diagram in UML?",
        "options": [
            {
                "key": "A",
                "text": "To show the interactions between classes in a system"
            },
            {
                "key": "B",
                "text": "To represent the dynamic behavior of a system"
            },
            {
                "key": "C",
                "text": "To illustrate the organization of objects within a class"
            },
            {
                "key": "D",
                "text": "To depict the high-level functionality of a system"
            }
        ],
        "answer": "D",
        "hint": "Biểu đồ use case cung cấp cái nhìn mức cao về các chức năng mà hệ thống cung cấp cho các tác nhân bên ngoài.",
        "explanation": {
            "summary": "Mục tiêu chính của Use Case Diagram là mô tả tổng quan chức năng mức cao của hệ thống (high-level functionality) dưới góc nhìn của các tác nhân bên ngoài.",
            "breakdown": {
                "A": "Sai: Mô tả tương tác giữa các lớp là nhiệm vụ của interaction diagrams.",
                "B": "Sai: Mô tả hành vi động chi tiết là statechart/activity diagrams.",
                "C": "Sai: Tổ chức đối tượng bên trong là class/composite diagram.",
                "D": "ĐÚNG: Thể hiện chức năng mức cao của hệ thống dưới góc nhìn người dùng."
            }
        }
    },
    {
        "id": 31,
        "image": "../Quiz5/Q31.webp",
        "question": "Which of the following system problems does availability address?",
        "options": [
            {
                "key": "A",
                "text": "Denial of service"
            },
            {
                "key": "B",
                "text": "Single point of failure"
            },
            {
                "key": "C",
                "text": "System throughput"
            },
            {
                "key": "D",
                "text": "_ System penetration"
            }
        ],
        "answer": "B",
        "hint": "Căn cứ chuẩn theo giáo trình Software Modeling and Design (Hassan Gomaa) Chương 20: Software Quality Attributes.",
        "explanation": {
            "summary": "Đáp án chính xác theo đáp án chính thức của tác giả Hassan Gomaa (Chương 20: Software Quality Attributes, Câu 10): \"Single point of failure\".",
            "breakdown": {
                "A": "Sai: Denial of service. Lựa chọn này không phản ánh đúng định nghĩa/khái niệm của giáo trình.",
                "B": "ĐÚNG: Single point of failure. Khẳng định chuẩn xác theo giáo trình của Hassan Gomaa.",
                "C": "Sai: System throughput. Lựa chọn này không phản ánh đúng định nghĩa/khái niệm của giáo trình.",
                "D": "Sai: _ System penetration. Lựa chọn này không phản ánh đúng định nghĩa/khái niệm của giáo trình."
            }
        }
    },
    {
        "id": 32,
        "image": "../Quiz5/Q32.webp",
        "question": "Which of the following is a common bottleneck that impacts scalability in traditional web applications?",
        "options": [
            {
                "key": "A",
                "text": "The web server layer."
            },
            {
                "key": "B",
                "text": "The application server layer."
            },
            {
                "key": "C",
                "text": "The database server layer."
            },
            {
                "key": "D",
                "text": "All of the above"
            }
        ],
        "answer": "A",
        "hint": "Gợi ý: Đọc kỹ các từ khóa chuyên ngành trong đề bài và đối chiếu với giáo trình SWD392 và phương pháp COMET của Hassan Gomaa.",
        "explanation": {
            "summary": "Đáp án chính xác là [A]: \"The web server layer.\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế kiến trúc phần mềm.",
            "breakdown": {
                "A": "ĐÚNG: The web server layer.. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
                "B": "Sai: \"The application server layer.\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
                "C": "Sai: \"The database server layer.\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
                "D": "Sai: All of the above. Lựa chọn này không phù hợp với chuẩn thiết kế của giáo trình."
            }
        }
    },
    {
        "id": 33,
        "image": "../Quiz5/Q33.webp",
        "question": "In COMET-based system design, how is the quality attribute of testability primarily supported? A",
        "options": [
            {
                "key": "A",
                "text": "By tightly coupling modules for faster access"
            },
            {
                "key": "B",
                "text": "By structuring the system with clearly defined interfaces and decoupled components"
            },
            {
                "key": "C",
                "text": "By embedding test code into production logic"
            },
            {
                "key": "D",
                "text": "By minimizing documentation and focusing on rapid prototyping"
            }
        ],
        "answer": "B",
        "hint": "Khả năng kiểm thử (Testability) được hỗ trợ tốt nhất khi các thành phần có interface rõ ràng và liên kết lỏng lẻo.",
        "explanation": {
            "summary": "Trong thiết kế kiến trúc COMET, testability đạt được nhờ cấu trúc hệ thống thành các module có ranh giới rõ ràng, interface tường minh và ghép nối lỏng (decoupled components), giúp cô lập kiểm thử đơn vị và tích hợp dễ dàng.",
            "breakdown": {
                "A": "Sai: Ghép nối chặt (tight coupling) làm giảm khả năng kiểm thử độc lập.",
                "B": "ĐÚNG: Cấu trúc hệ thống với các interface rõ ràng và các component tách rời (decoupled).",
                "C": "Sai: Nhúng mã test vào code production là phản khuôn mẫu (anti-pattern).",
                "D": "Sai: Giảm tài liệu không hỗ trợ kiểm thử kiến trúc."
            }
        }
    },
    {
        "id": 34,
        "image": "../Quiz5/Q34.webp",
        "question": "What is the main purpose of using use Case Modeling in system development? A",
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
        "answer": "A",
        "hint": "Use Case Modeling tập trung nắm bắt tương tác giữa người dùng bên ngoài và hệ thống.",
        "explanation": {
            "summary": "Mục đích chính của Use Case Modeling là xác định và mô hình hóa các chuỗi tương tác giữa các tác nhân (users/external systems) và hệ thống để làm rõ yêu cầu chức năng.",
            "breakdown": {
                "A": "ĐÚNG: Nhận diện các tương tác giữa người dùng và hệ thống.",
                "B": "Sai: Không liên quan đến thuật toán lưu trữ.",
                "C": "Sai: Không liên quan đến tự động hóa test hiệu năng.",
                "D": "Sai: Không liên quan đến giao thức mạng."
            }
        }
    },
    {
        "id": 35,
        "image": "../Quiz5/Q35.webp",
        "question": "When modeling alternate pathways, when should one apply the extend relationship?",
        "options": [
            {
                "key": "A",
                "text": "when a single, intricate interaction sequence requires the participation of numerous performers."
            },
            {
                "key": "B",
                "text": "when a single use case contains an excessive number of alternate, optional, or extraordinary interaction sequences"
            },
            {
                "key": "C",
                "text": "when numerous existing use cases exhibit shared functionality that may be taken and used again."
            },
            {
                "key": "D",
                "text": "Sometimes it is necessary to group relevant use cases in a use case package to improve organization."
            }
        ],
        "answer": "B",
        "hint": "Gợi ý: Căn cứ theo nguyên lý kiến trúc chuẩn trong Hassan Gomaa Ch 6 (Use Case Modeling).",
        "explanation": {
            "summary": "Quan hệ Extend được áp dụng khi một use case chứa nhiều luồng phụ, tùy chọn hoặc ngoại lệ cần tách riêng.",
            "breakdown": {
                "A": "Sai: when a single, intricate interaction sequence requires the participation of numerous performers.. Không phù hợp với nguyên lý thiết kế.",
                "B": "ĐÚNG: when a single use case contains an excessive number of alternate, optional, or extraordinary interaction sequences. Khẳng định chuẩn xác theo Hassan Gomaa Ch 6 (Use Case Modeling).",
                "C": "Sai: when numerous existing use cases exhibit shared functionality that may be taken and used again.. Không phù hợp với nguyên lý thiết kế.",
                "D": "Sai: Sometimes it is necessary to group relevant use cases in a use case package to improve organization.. Không phù hợp với nguyên lý thiết kế."
            }
        }
    },
    {
        "id": 36,
        "image": "../Quiz5/Q36.webp",
        "question": "Which method can be applied to define a system's functional requirements?",
        "options": [
            {
                "key": "A",
                "text": "use case modeling"
            },
            {
                "key": "B",
                "text": "Requirements analysis"
            },
            {
                "key": "C",
                "text": "Static modeling"
            },
            {
                "key": "D",
                "text": "Activity diagrams"
            }
        ],
        "answer": "A",
        "hint": "Phương pháp chuẩn trong COMET để đặc tả yêu cầu chức năng từ góc nhìn người dùng là gì?",
        "explanation": {
            "summary": "Trong phương pháp COMET, Use Case Modeling là kỹ thuật chính được áp dụng để xác định và định nghĩa các yêu cầu chức năng của hệ thống.",
            "breakdown": {
                "A": "ĐÚNG: Use case modeling dùng để xác định các yêu cầu chức năng.",
                "B": "Sai: Requirements analysis là một giai đoạn chung, không phải phương pháp cụ thể như use case modeling.",
                "C": "Sai: Static modeling mô hình hóa cấu trúc tĩnh.",
                "D": "Sai: Activity diagram thường dùng cho mô hình hóa quy trình nghiệp vụ."
            }
        }
    },
    {
        "id": 37,
        "image": "../Quiz5/Q37.webp",
        "question": "When evolving a complex software system, which strategy minimizes risks during the introduction of major design changes?",
        "options": [
            {
                "key": "A",
                "text": "Immediate deployment to production"
            },
            {
                "key": "B",
                "text": "Parallel model refinement and incremental integration"
            },
            {
                "key": "C",
                "text": "Isolated team development without integration"
            },
            {
                "key": "D",
                "text": "Skipping design documentation updates"
            }
        ],
        "answer": "B",
        "hint": "Chiến lược phát triển song song và tích hợp từng bước giúp giảm thiểu rủi ro khi thay đổi lớn.",
        "explanation": {
            "summary": "Khi tiến hóa một hệ thống phức tạp, tinh chỉnh mô hình song song và tích hợp gia tăng (parallel model refinement and incremental integration) là chiến lược tối ưu giúp kiểm soát và giảm thiểu rủi ro.",
            "breakdown": {
                "A": "Sai: Triển khai trực tiếp lên production mà không kiểm thử có rủi ro cực cao.",
                "B": "ĐÚNG: Tinh chỉnh mô hình song song và tích hợp gia tăng giúp giảm thiểu rủi ro.",
                "C": "Sai: Làm việc cô lập không tích hợp dẫn đến khủng hoảng tích hợp (integration hell).",
                "D": "Sai: Bỏ qua tài liệu làm tăng nợ kỹ thuật và rủi ro."
            }
        }
    },
    {
        "id": 38,
        "image": "../Quiz5/Q38.webp",
        "question": "How the discriminator represented in the relational database mapping from the generalization/specialization hierarchy?",
        "options": [
            {
                "key": "A",
                "text": "As a primary key in the superclass table."
            },
            {
                "key": "B",
                "text": "As an attribute in each subclass table."
            },
            {
                "key": "C",
                "text": "As part of the concatenated primary key in each subclass table."
            },
            {
                "key": "D",
                "text": "As an explicit attribute of the superclass table."
            }
        ],
        "answer": "D",
        "hint": "Gợi ý: Căn cứ theo nguyên lý kiến trúc chuẩn trong Hassan Gomaa Ch 15 (Relational Database Design).",
        "explanation": {
            "summary": "Khi ánh xạ phân cấp kế thừa vào một bảng CSDL duy nhất, discriminator được lưu thành một thuộc tính (cột) rõ ràng của bảng superclass.",
            "breakdown": {
                "A": "Sai: As a primary key in the superclass table.. Không phù hợp với nguyên lý thiết kế.",
                "B": "Sai: As an attribute in each subclass table.. Không phù hợp với nguyên lý thiết kế.",
                "C": "Sai: As part of the concatenated primary key in each subclass table.. Không phù hợp với nguyên lý thiết kế.",
                "D": "ĐÚNG: As an explicit attribute of the superclass table.. Khẳng định chuẩn xác theo Hassan Gomaa Ch 15 (Relational Database Design)."
            }
        }
    },
    {
        "id": 39,
        "image": "../Quiz5/Q39.webp",
        "question": "Which stereotype represents a class that encapsulates data and may sewe as an interface to a database?",
        "options": [
            {
                "key": "A",
                "text": "Boundary class"
            },
            {
                "key": "B",
                "text": "Entity class"
            },
            {
                "key": "C",
                "text": "Control class"
            },
            {
                "key": "D",
                "text": "Application logic class"
            }
        ],
        "answer": "A",
        "hint": "Gợi ý: Đọc kỹ các từ khóa chuyên ngành trong đề bài và đối chiếu với giáo trình SWD392 và phương pháp COMET của Hassan Gomaa.",
        "explanation": {
            "summary": "Đáp án chính xác là [A]: \"Boundary class\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế kiến trúc phần mềm.",
            "breakdown": {
                "A": "ĐÚNG: Boundary class. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
                "B": "Sai: \"Entity class\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
                "C": "Sai: \"Control class\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
                "D": "Sai: \"Application logic class\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
            }
        }
    },
    {
        "id": 40,
        "image": "../Quiz5/Q40.webp",
        "question": "In class diagram, optional relationship is:",
        "options": [
            {
                "key": "A",
                "text": "1..*"
            },
            {
                "key": "B",
                "text": "m..n"
            },
            {
                "key": "C",
                "text": "*"
            },
            {
                "key": "D",
                "text": "0..1"
            }
        ],
        "answer": "D",
        "hint": "Mối quan hệ tùy chọn (optional) có nghĩa là số lượng thể hiện có thể là 0 hoặc 1.",
        "explanation": {
            "summary": "Trong biểu đồ lớp UML, một quan hệ tùy chọn (optional relationship) có bội số (multiplicity) là 0..1, nghĩa là thực thể có thể không có hoặc có tối đa 1 liên kết.",
            "breakdown": {
                "A": "Sai: 1..* là quan hệ bắt buộc có ít nhất một thể hiện.",
                "B": "Sai: m..n là quan hệ nhiều-nhiều tổng quát.",
                "C": "Sai: * tương đương 0..* (không giới hạn trên).",
                "D": "ĐÚNG: 0..1 thể hiện quan hệ tùy chọn có thể vắng mặt hoặc có đúng 1."
            }
        }
    },
    {
        "id": 41,
        "image": "../Quiz5/Q41.webp",
        "question": "What approach does the spiral model emphasize?",
        "options": [
            {
                "key": "A",
                "text": "Phased software development"
            },
            {
                "key": "B",
                "text": "Throwaway prototyping"
            },
            {
                "key": "C",
                "text": "Risk-driven development"
            },
            {
                "key": "D",
                "text": "Incremental development"
            }
        ],
        "answer": "C",
        "hint": "Căn cứ chuẩn theo giáo trình Software Modeling and Design (Hassan Gomaa) Chương 3: Software Life Cycle Models and Processes.",
        "explanation": {
            "summary": "Đáp án chính xác theo đáp án chính thức của tác giả Hassan Gomaa (Chương 3: Software Life Cycle Models and Processes, Câu 6): \"Risk-driven development\".",
            "breakdown": {
                "A": "Sai: Phased software development. Lựa chọn này không phản ánh đúng định nghĩa/khái niệm của giáo trình.",
                "B": "Sai: Throwaway prototyping. Lựa chọn này không phản ánh đúng định nghĩa/khái niệm của giáo trình.",
                "C": "ĐÚNG: Risk-driven development. Khẳng định chuẩn xác theo giáo trình của Hassan Gomaa.",
                "D": "Sai: Incremental development. Lựa chọn này không phản ánh đúng định nghĩa/khái niệm của giáo trình."
            }
        }
    },
    {
        "id": 42,
        "image": "../Quiz5/Q42.webp",
        "question": "What is a software life cycle?",
        "options": [
            {
                "key": "A",
                "text": "The life of the software"
            },
            {
                "key": "B",
                "text": "A cyclic approach to developing software"
            },
            {
                "key": "C",
                "text": "A phased approach to developing software"
            },
            {
                "key": "D",
                "text": "The life of software developed in cycles"
            }
        ],
        "answer": "C",
        "hint": "Căn cứ chuẩn theo giáo trình Software Modeling and Design (Hassan Gomaa) Chương 3: Software Life Cycle Models and Processes.",
        "explanation": {
            "summary": "Đáp án chính xác theo đáp án chính thức của tác giả Hassan Gomaa (Chương 3: Software Life Cycle Models and Processes, Câu 1): \"A phased approach to developing software\".",
            "breakdown": {
                "A": "Sai: The life of the software. Lựa chọn này không phản ánh đúng định nghĩa/khái niệm của giáo trình.",
                "B": "Sai: A cyclic approach to developing software. Lựa chọn này không phản ánh đúng định nghĩa/khái niệm của giáo trình.",
                "C": "ĐÚNG: A phased approach to developing software. Khẳng định chuẩn xác theo giáo trình của Hassan Gomaa.",
                "D": "Sai: The life of software developed in cycles. Lựa chọn này không phản ánh đúng định nghĩa/khái niệm của giáo trình."
            }
        }
    },
    {
        "id": 43,
        "image": "../Quiz5/Q43.webp",
        "question": "Which of the following best describes group communication in distributed applications?",
        "options": [
            {
                "key": "A",
                "text": "A form of one-to-one communication where messages are sent directly between buo components only."
            },
            {
                "key": "B",
                "text": "A method where a sender transmits the same message to multiple recipients using broadcast or multicast mechanisms _"
            },
            {
                "key": "C",
                "text": "A technique for encrypting messages before sending them across different nodes."
            },
            {
                "key": "D",
                "text": "A communication pattern where all components in a system send messages to a single central controller"
            }
        ],
        "answer": "B",
        "hint": "Giao tiếp nhóm (group communication) truyền cùng một thông điệp tới nhiều người nhận thông qua broadcast hoặc multicast.",
        "explanation": {
            "summary": "Group communication trong các ứng dụng phân tán là phương thức người gửi truyền cùng một thông điệp tới một nhóm nhiều người nhận thông qua cơ chế broadcast hoặc multicast.",
            "breakdown": {
                "A": "Sai: Đây là định nghĩa của point-to-point (one-to-one).",
                "B": "ĐÚNG: Người gửi truyền thông điệp tới nhiều người nhận qua broadcast hoặc multicast.",
                "C": "Sai: Đây là cơ chế mã hóa bảo mật.",
                "D": "Sai: Đây là mô hình kiểm soát tập trung."
            }
        }
    },
    {
        "id": 44,
        "image": "../Quiz5/Q44.webp",
        "question": "How does Copilot assist during software design?",
        "options": [
            {
                "key": "A",
                "text": "By compiling code"
            },
            {
                "key": "B",
                "text": "By providing code suggestions and generating design structures"
            },
            {
                "key": "C",
                "text": "By executing database queries"
            },
            {
                "key": "D",
                "text": "By configuring deployment pipelines"
            }
        ],
        "answer": "B",
        "hint": "Các trợ lý AI (như GitHub Copilot) hỗ trợ gợi ý mã nguồn và đề xuất cấu trúc thiết kế.",
        "explanation": {
            "summary": "AI-assisted tools hỗ trợ các kỹ sư phần mềm bằng cách đưa ra gợi ý code ngữ cảnh, đề xuất cấu trúc lớp và mẫu thiết kế phù hợp.",
            "breakdown": {
                "A": "Sai: Trình biên dịch (compiler) thực hiện biên dịch mã.",
                "B": "ĐÚNG: Cung cấp gợi ý mã nguồn và tạo các cấu trúc thiết kế.",
                "C": "Sai: DBMS engine thực thi câu lệnh truy vấn.",
                "D": "Sai: CI/CD tools cấu hình triển khai."
            }
        }
    },
    {
        "id": 45,
        "image": "../Quiz5/Q45.webp",
        "question": "What does a component's required interface consist of?",
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
                "text": "The visible operations of a component"
            }
        ],
        "answer": "A",
        "hint": "Căn cứ chuẩn theo giáo trình Software Modeling and Design (Hassan Gomaa) Chương 17: Designing Component-Based Software Architectures.",
        "explanation": {
            "summary": "Đáp án chính xác theo đáp án chính thức của tác giả Hassan Gomaa (Chương 17: Designing Component-Based Software Architectures, Câu 3): \"The operations that a component must fulfill\".",
            "breakdown": {
                "A": "ĐÚNG: The operations that a component must fulfill. Khẳng định chuẩn xác theo giáo trình của Hassan Gomaa.",
                "B": "Sai: The operations inside a component. Lựa chọn này không phản ánh đúng định nghĩa/khái niệm của giáo trình.",
                "C": "Sai: The operations that a component uses. Lựa chọn này không phản ánh đúng định nghĩa/khái niệm của giáo trình.",
                "D": "Sai: The visible operations of a component. Lựa chọn này không phản ánh đúng định nghĩa/khái niệm của giáo trình."
            }
        }
    },
    {
        "id": 46,
        "image": "../Quiz5/Q46.webp",
        "question": "How is a concurrent service designed?",
        "options": [
            {
                "key": "A",
                "text": "One object that responds to requests from clients"
            },
            {
                "key": "B",
                "text": "Multiple objects that respond to requests from clients"
            },
            {
                "key": "C",
                "text": "One subsystem that responds to requests from clients"
            },
            {
                "key": "D",
                "text": "Multiple subsystems that respond to requests from clients"
            }
        ],
        "answer": "B",
        "hint": "Căn cứ chuẩn theo giáo trình Software Modeling and Design (Hassan Gomaa) Chương 15: Designing Client/Server Software Architectures.",
        "explanation": {
            "summary": "Đáp án chính xác theo đáp án chính thức của tác giả Hassan Gomaa (Chương 15: Designing Client/Server Software Architectures, Câu 6): \"Multiple objects that respond to requests from clients\".",
            "breakdown": {
                "A": "Sai: One object that responds to requests from clients. Lựa chọn này không phản ánh đúng định nghĩa/khái niệm của giáo trình.",
                "B": "ĐÚNG: Multiple objects that respond to requests from clients. Khẳng định chuẩn xác theo giáo trình của Hassan Gomaa.",
                "C": "Sai: One subsystem that responds to requests from clients. Lựa chọn này không phản ánh đúng định nghĩa/khái niệm của giáo trình.",
                "D": "Sai: Multiple subsystems that respond to requests from clients. Lựa chọn này không phản ánh đúng định nghĩa/khái niệm của giáo trình."
            }
        }
    },
    {
        "id": 47,
        "image": "../Quiz5/Q47.webp",
        "question": "What constitutes a Client/Server software architecture's fundamental structure?",
        "options": [
            {
                "key": "A",
                "text": "One client and multiple services"
            },
            {
                "key": "B",
                "text": "Multiple clients and one service"
            },
            {
                "key": "C",
                "text": "Multiple clients and multiple services"
            },
            {
                "key": "D",
                "text": "One client and one service"
            }
        ],
        "answer": "B",
        "hint": "Cấu trúc cơ bản của hệ thống Client/Server là một dịch vụ phục vụ cho nhiều client.",
        "explanation": {
            "summary": "Theo giáo trình Hassan Gomaa Ch 15: Cấu trúc cơ bản điển hình của kiến trúc Client/Server (Basic Client/Single Service pattern) bao gồm nhiều client gửi yêu cầu và một server cung cấp dịch vụ đáp ứng.",
            "breakdown": {
                "A": "Sai: Mô hình 1 client nhiều server không phải cấu trúc căn bản.",
                "B": "ĐÚNG: Nhiều client yêu cầu dịch vụ và một service đáp ứng các yêu cầu đó.",
                "C": "Sai: Đây là mô hình Client/Multiple Services mở rộng.",
                "D": "Sai: Đây là trường hợp điểm-điểm đơn giản."
            }
        }
    },
    {
        "id": 48,
        "image": "../Quiz5/Q48.webp",
        "question": "Which database constraint enforces uniqueness of each record?",
        "options": [
            {
                "key": "A",
                "text": "Foreign key"
            },
            {
                "key": "B",
                "text": "Primary key"
            },
            {
                "key": "C",
                "text": "C. Index"
            },
            {
                "key": "D",
                "text": "Trigger"
            }
        ],
        "answer": "B",
        "hint": "Ràng buộc nào đảm bảo tính duy nhất và không rỗng cho mỗi bản ghi trong bảng CSDL?",
        "explanation": {
            "summary": "Primary Key (khóa chính) là thuộc tính hoặc tập thuộc tính xác định duy nhất (unique) mỗi bản ghi trong bảng quan hệ và không được phép chứa giá trị NULL.",
            "breakdown": {
                "A": "Sai: Foreign key dùng để duy trì toàn vẹn tham chiếu.",
                "B": "ĐÚNG: Primary key bắt buộc tính duy nhất cho mỗi bản ghi.",
                "C": "Sai: Index tối ưu hóa tốc độ tìm kiếm.",
                "D": "Sai: Trigger là thủ tục tự động thực thi khi có sự kiện thay đổi dữ liệu."
            }
        }
    },
    {
        "id": 49,
        "image": "../Quiz5/Q49.webp",
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
        "hint": "Gợi ý: Căn cứ theo nguyên lý kiến trúc chuẩn trong Hassan Gomaa Ch 18 (Concurrent & Real-Time).",
        "explanation": {
            "summary": "Periodic task là tác vụ được kích hoạt lặp lại định kỳ bởi một sự kiện hẹn giờ (timer event).",
            "breakdown": {
                "A": "Sai: A task that responds to each message it receives. Không phù hợp với nguyên lý thiết kế.",
                "B": "ĐÚNG: A task that is activated by a timer event. Khẳng định chuẩn xác theo Hassan Gomaa Ch 18 (Concurrent & Real-Time).",
                "C": "Sai: A task that is activated by an external event. Không phù hợp với nguyên lý thiết kế.",
                "D": "Sai: A task that is activated by an input event. Không phù hợp với nguyên lý thiết kế."
            }
        }
    },
    {
        "id": 50,
        "image": "../Quiz5/Q50.webp",
        "question": "What is a user interaction task?",
        "options": [
            {
                "key": "A",
                "text": "task that interacts with 1/0 devices"
            },
            {
                "key": "B",
                "text": "task that interacts with users"
            },
            {
                "key": "C",
                "text": "task that interacts with a user sequentially"
            },
            {
                "key": "D",
                "text": "task that interacts with a user concurrently"
            }
        ],
        "answer": "C",
        "hint": "Căn cứ chuẩn theo giáo trình Software Modeling and Design (Hassan Gomaa) Chương 18: Designing Concurrent and Real-Time Software Architectures.",
        "explanation": {
            "summary": "Đáp án chính xác theo đáp án chính thức của tác giả Hassan Gomaa (Chương 18: Designing Concurrent and Real-Time Software Architectures, Câu 6): \"task that interacts with a user sequentially\".",
            "breakdown": {
                "A": "Sai: task that interacts with 1/0 devices. Lựa chọn này không phản ánh đúng định nghĩa/khái niệm của giáo trình.",
                "B": "Sai: task that interacts with users. Lựa chọn này không phản ánh đúng định nghĩa/khái niệm của giáo trình.",
                "C": "ĐÚNG: task that interacts with a user sequentially. Khẳng định chuẩn xác theo giáo trình của Hassan Gomaa.",
                "D": "Sai: task that interacts with a user concurrently. Lựa chọn này không phản ánh đúng định nghĩa/khái niệm của giáo trình."
            }
        }
    },
    {
        "id": 51,
        "image": "../Quiz5/Q51.webp",
        "question": "Which of the following is true for a Centralized Control architectural pattern?",
        "options": [
            {
                "key": "A",
                "text": "Control is divided among various control components _"
            },
            {
                "key": "B",
                "text": "It provides the overall control and sequencing of the system."
            },
            {
                "key": "C",
                "text": "It provides overall control by coordinating several control components _"
            },
            {
                "key": "D",
                "text": "It provides overall control over various 1/0 objects."
            }
        ],
        "answer": "B",
        "hint": "Căn cứ chuẩn theo giáo trình Software Modeling and Design (Hassan Gomaa) Chương 18: Designing Concurrent and Real-Time Software Architectures.",
        "explanation": {
            "summary": "Đáp án chính xác theo đáp án chính thức của tác giả Hassan Gomaa (Chương 18: Designing Concurrent and Real-Time Software Architectures, Câu 7): \"It provides the overall control and sequencing of the system.\".",
            "breakdown": {
                "A": "Sai: Control is divided among various control components.. Lựa chọn này không phản ánh đúng định nghĩa/khái niệm của giáo trình.",
                "B": "ĐÚNG: It provides the overall control and sequencing of the system.. Khẳng định chuẩn xác theo giáo trình của Hassan Gomaa.",
                "C": "Sai: It provides overall control by coordinating several control components.. Lựa chọn này không phản ánh đúng định nghĩa/khái niệm của giáo trình.",
                "D": "Sai: It provides overall control over various 1/0 objects.. Lựa chọn này không phù hợp với chuẩn thiết kế của giáo trình."
            }
        }
    },
    {
        "id": 52,
        "image": "../Quiz5/Q52.webp",
        "question": "What is a dynamic view of a software architecture?",
        "options": [
            {
                "key": "A",
                "text": "A view in terms ofa module hierarchy"
            },
            {
                "key": "B",
                "text": "A view in terms of components and connectors"
            },
            {
                "key": "C",
                "text": "A view of the physical configuration in terms of nodes and interconnections"
            },
            {
                "key": "D",
                "text": "A view in terms of objects and messages"
            }
        ],
        "answer": "D",
        "hint": "Gợi ý: Đọc kỹ các từ khóa chuyên ngành trong đề bài và đối chiếu với giáo trình SWD392 và phương pháp COMET của Hassan Gomaa.",
        "explanation": {
            "summary": "Đáp án chính xác là [D]: \"A view in terms of objects and messages\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế kiến trúc phần mềm.",
            "breakdown": {
                "A": "Sai: \"A view in terms of a module hierarchy\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
                "B": "Sai: \"A view in terms of components and connectors\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
                "C": "Sai: \"A view of the physical configuration in terms of nodes and interconnections\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
                "D": "ĐÚNG: A view in terms of objects and messages. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế."
            }
        }
    },
    {
        "id": 53,
        "image": "../Quiz5/Q53.webp",
        "question": "What ensures consistency between a communication diagram and a statechart when modeling state-dependent interaction scenarios?",
        "options": [
            {
                "key": "A",
                "text": "using different naming conventions for events and messages."
            },
            {
                "key": "B",
                "text": "Assigning unique names to each state in the statechart"
            },
            {
                "key": "C",
                "text": "Numbering messages and events in the same sequence across both diagrams."
            },
            {
                "key": "D",
                "text": "Defining separate control objects for each diagram."
            }
        ],
        "answer": "D",
        "hint": "Gợi ý: Hãy phân biệt giữa Sự kiện kích hoạt (Event), Điều kiện canh giữ (Guard condition) và Hành động được thực thi (Action).",
        "explanation": {
            "summary": "Đáp án chính xác là [D]: \"Defining separate control objects for each diagram.\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế kiến trúc phần mềm.",
            "breakdown": {
                "A": "Sai: \"using different naming conventions for events and messages.\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
                "B": "Sai: \"Assigning unique names to each state in the statechart\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
                "C": "Sai: \"Numbering messages and events in the same sequence across both diagrams.\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
                "D": "ĐÚNG: Defining separate control objects for each diagram.. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế."
            }
        }
    },
    {
        "id": 54,
        "image": "../Quiz5/Q54.webp",
        "question": "What is a structural view of a software architecture?",
        "options": [
            {
                "key": "A",
                "text": "A view in terms ofa module hierarchy"
            },
            {
                "key": "B",
                "text": "A view in terms of components and connectors"
            },
            {
                "key": "C",
                "text": "A view of the physical configuration in terms of nodes and interconnections"
            },
            {
                "key": "D",
                "text": "A view in terms of objects and messages"
            }
        ],
        "answer": "B",
        "hint": "Góc nhìn cấu trúc (structural view) của kiến trúc phần mềm thể hiện hệ thống qua các components và connectors.",
        "explanation": {
            "summary": "Theo Hassan Gomaa Ch 12: Structural view của kiến trúc phần mềm mô tả hệ thống dưới dạng các Components (thành phần) và Connectors (kết nối giữa các thành phần).",
            "breakdown": {
                "A": "Sai: Module hierarchy thuộc Development view.",
                "B": "ĐÚNG: Góc nhìn dưới dạng các components và connectors.",
                "C": "Sai: Nodes and interconnections thuộc Deployment view.",
                "D": "Sai: Objects and messages thuộc Dynamic interaction view."
            }
        }
    },
    {
        "id": 55,
        "image": "../Quiz5/Q55.webp",
        "question": "Which UML diagram is typically used to show the dynamic behavior of a system, including the sequence of interactions between objects or components?",
        "options": [
            {
                "key": "A",
                "text": "Class diagram"
            },
            {
                "key": "B",
                "text": "use case diagram"
            },
            {
                "key": "C",
                "text": "Sequence diagram"
            },
            {
                "key": "D",
                "text": "State diagram"
            }
        ],
        "answer": "C",
        "hint": "Biểu đồ nào trong UML biểu diễn trình tự các thông điệp trao đổi giữa các đối tượng theo trục thời gian?",
        "explanation": {
            "summary": "Sequence Diagram (biểu đồ tuần tự) mô tả hành vi động thông qua trình tự thời gian của các thông điệp được gửi và nhận giữa các đối tượng.",
            "breakdown": {
                "A": "Sai: Class diagram là biểu đồ tĩnh.",
                "B": "Sai: Use case diagram mô tả yêu cầu chức năng.",
                "C": "ĐÚNG: Sequence diagram thể hiện tuần tự các tương tác động giữa các đối tượng.",
                "D": "Sai: State diagram thể hiện các trạng thái của một đối tượng đơn lẻ."
            }
        }
    },
    {
        "id": 56,
        "image": "../Quiz5/Q56.webp",
        "question": "What are software structuring criteria?",
        "options": [
            {
                "key": "A",
                "text": "Fundamental ideas that can be applied to designing a system."
            },
            {
                "key": "B",
                "text": "Systematic approaches for producing a design."
            },
            {
                "key": "C",
                "text": "Guidelines used to help in structuring a software system into its components."
            },
            {
                "key": "D",
                "text": "Overall plans for developing a design."
            }
        ],
        "answer": "C",
        "hint": "Căn cứ chuẩn theo giáo trình Software Modeling and Design (Hassan Gomaa) Chương 1: Introduction.",
        "explanation": {
            "summary": "Đáp án chính xác theo đáp án chính thức của tác giả Hassan Gomaa (Chương 1: Introduction, Câu 7): \"Guidelines used to help in structuring a software system into its components.\".",
            "breakdown": {
                "A": "Sai: Fundamental ideas that can be applied to designing a system.. Lựa chọn này không phản ánh đúng định nghĩa/khái niệm của giáo trình.",
                "B": "Sai: Systematic approaches for producing a design.. Lựa chọn này không phản ánh đúng định nghĩa/khái niệm của giáo trình.",
                "C": "ĐÚNG: Guidelines used to help in structuring a software system into its components.. Khẳng định chuẩn xác theo giáo trình của Hassan Gomaa.",
                "D": "Sai: Overall plans for developing a design.. Lựa chọn này không phản ánh đúng định nghĩa/khái niệm của giáo trình."
            }
        }
    },
    {
        "id": 57,
        "image": "../Quiz5/Q57.webp",
        "question": "What is a software architecture?",
        "options": [
            {
                "key": "A",
                "text": "The software inside a building."
            },
            {
                "key": "B",
                "text": "The structure of a Client/Server system."
            },
            {
                "key": "C",
                "text": "The overall structure of a software system."
            },
            {
                "key": "D",
                "text": "The software classes and their relationships."
            }
        ],
        "answer": "A",
        "hint": "Căn cứ chuẩn theo giáo trình Software Modeling and Design (Hassan Gomaa) Chương 1: Introduction.",
        "explanation": {
            "summary": "Đáp án chính xác theo đáp án chính thức của tác giả Hassan Gomaa (Chương 1: Introduction, Câu 3): \"The software inside a building,\".",
            "breakdown": {
                "A": "ĐÚNG: The software inside a building,. Khẳng định chuẩn xác theo giáo trình của Hassan Gomaa.",
                "B": "Sai: The structure of a Client/Server system.. Lựa chọn này không phù hợp với chuẩn thiết kế của giáo trình.",
                "C": "Sai: The overall structure of a software system.. Lựa chọn này không phù hợp với chuẩn thiết kế của giáo trình.",
                "D": "Sai: The software classes and their relationships.. Lựa chọn này không phù hợp với chuẩn thiết kế của giáo trình."
            }
        }
    },
    {
        "id": 58,
        "image": "../Quiz5/Q58.webp",
        "question": "What is the primary goal of dynamic interaction modeling?",
        "options": [
            {
                "key": "A",
                "text": "To illustrate runtime behavior and communication between components"
            },
            {
                "key": "B",
                "text": "To automate testing processes"
            },
            {
                "key": "C",
                "text": "To centralize system deployment"
            },
            {
                "key": "D",
                "text": "To simplify' static modeling"
            }
        ],
        "answer": "A",
        "hint": "Mô hình hóa tương tác động nhằm mô tả hành vi lúc thực thi và luồng thông điệp giữa các thành phần.",
        "explanation": {
            "summary": "Mục tiêu chính của Dynamic Interaction Modeling là làm sáng tỏ hành vi lúc chạy (runtime behavior) và giao tiếp trao đổi thông điệp giữa các đối tượng tham gia thực hiện ca sử dụng.",
            "breakdown": {
                "A": "ĐÚNG: Minh họa hành vi thực thi và giao tiếp giữa các thành phần.",
                "B": "Sai: Không liên quan đến tự động hóa kiểm thử.",
                "C": "Sai: Không liên quan đến tập trung hóa triển khai.",
                "D": "Sai: Không làm đơn giản hóa mô hình tĩnh."
            }
        }
    },
    {
        "id": 59,
        "image": "../Quiz5/Q59.webp",
        "question": "What kind of relationship between tables typically requires a foreign key in relational database design?",
        "options": [
            {
                "key": "A",
                "text": "O ne-to-one"
            },
            {
                "key": "B",
                "text": "One-to-many"
            },
            {
                "key": "C",
                "text": "Many-to-many"
            },
            {
                "key": "D",
                "text": "None of the above"
            }
        ],
        "answer": "C",
        "hint": "Gợi ý: Khóa ngoại (FOREIGN KEY) trong cơ sở dữ liệu quan hệ được dùng để thiết lập và đảm bảo tính toàn vẹn tham chiếu (referential integrity) giữa hai bảng.",
        "explanation": {
            "summary": "Đáp án chính xác là [C]: \"Many-to-many\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế kiến trúc phần mềm.",
            "breakdown": {
                "A": "Sai: \"One-to-one\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
                "B": "Sai: \"One-to-many\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
                "C": "ĐÚNG: Many-to-many. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
                "D": "Sai: \"None of the above\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
            }
        }
    },
    {
        "id": 60,
        "image": "../Quiz5/Q60.webp",
        "question": "What kind of object would be the first object to receive an input from an external object0",
        "options": [
            {
                "key": "A",
                "text": "A user interaction object"
            },
            {
                "key": "B",
                "text": "A proxy object"
            },
            {
                "key": "C",
                "text": "An entity object"
            },
            {
                "key": "D",
                "text": "A boundary object"
            }
        ],
        "answer": "D",
        "hint": "Căn cứ chuẩn theo giáo trình Software Modeling and Design (Hassan Gomaa) Chương 9: Dynamic Interaction Modeling.",
        "explanation": {
            "summary": "Đáp án chính xác theo đáp án chính thức của tác giả Hassan Gomaa (Chương 9: Dynamic Interaction Modeling, Câu 10): \"A boundary object\".",
            "breakdown": {
                "A": "Sai: A user interaction object. Lựa chọn này không phản ánh đúng định nghĩa/khái niệm của giáo trình.",
                "B": "Sai: A proxy object. Lựa chọn này không phản ánh đúng định nghĩa/khái niệm của giáo trình.",
                "C": "Sai: An entity object. Lựa chọn này không phản ánh đúng định nghĩa/khái niệm của giáo trình.",
                "D": "ĐÚNG: A boundary object. Khẳng định chuẩn xác theo giáo trình của Hassan Gomaa."
            }
        }
    }
];
