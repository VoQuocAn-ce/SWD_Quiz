window.QUIZ1_DATA = [
    {
        "id": 1,
        "image": "../Quiz1/Q1.webp",
        "question": "What role do 'Events' play in State-Dependent Dynamic Interaction Modeling?",
        "options": [
            {
                "key": "A",
                "text": "They are used to define the deployment configuration"
            },
            {
                "key": "B",
                "text": "They are only relevant in static modeling"
            },
            {
                "key": "C",
                "text": "They trigger transitions in statecharts and influence interactions in diagrams"
            },
            {
                "key": "D",
                "text": "They represent the physical connections between system components"
            }
        ],
        "answer": "C",
        "hint": "Hãy chú ý đến cơ chế kích hoạt (trigger) giữa các trạng thái và cách chúng chi phối dòng tương tác của các đối tượng.",
        "explanation": {
            "summary": "Trong mô hình tương tác động phụ thuộc trạng thái (State-Dependent Dynamic Interaction Modeling), 'Events' (sự kiện) là tác nhân kích hoạt các chuyển đổi trạng thái (transitions) trong biểu đồ trạng thái (statecharts) và định hướng các chuỗi tương tác (interactions) giữa các đối tượng trong hệ thống.",
            "breakdown": {
                "A": "Sai: Cấu hình triển khai (deployment configuration) được mô tả trong Deployment Diagram, không liên quan trực tiếp đến vai trò của Event trong mô hình hóa động.",
                "B": "Sai: Events là khái niệm cốt lõi của mô hình hóa động (dynamic modeling), không phải chỉ liên quan đến mô hình hóa tĩnh.",
                "C": "ĐÚNG: Sự kiện xuất hiện sẽ kích hoạt quá trình chuyển đổi giữa các trạng thái trong statechart, từ đó quyết định hành vi và thông điệp tương tác gửi nhận giữa các đối tượng.",
                "D": "Sai: Các kết nối vật lý giữa các thành phần phần cứng/hệ thống thuộc về biểu đồ triển khai (deployment nodes & connectors)."
            }
        },
        "topic": "Dynamic Interaction Modeling"
    },
    {
        "id": 2,
        "image": "../Quiz1/Q2.webp",
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
                "text": "User interface design"
            }
        ],
        "answer": "C",
        "hint": "Gợi ý: Căn cứ theo nguyên lý kiến trúc chuẩn trong Hassan Gomaa Ch 4 & 20 (Quality Attributes).",
        "explanation": {
            "summary": "Maintainability (khả năng bảo trì) là thuộc tính chất lượng phần mềm phi chức năng chuẩn.",
            "breakdown": {
                "A": "Sai: File organization. Không phù hợp với nguyên lý thiết kế.",
                "B": "Sai: Code syntax. Không phù hợp với nguyên lý thiết kế.",
                "C": "ĐÚNG: Maintainability. Khẳng định chuẩn xác theo Hassan Gomaa Ch 4 & 20 (Quality Attributes).",
                "D": "Sai: User interface design. Không phù hợp với nguyên lý thiết kế."
            }
        },
        "topic": "Software Quality Attributes"
    },
    {
        "id": 3,
        "image": "../Quiz1/Q3.webp",
        "question": "Which design pattern is used to provide a unified interface to a set of interfaces in a subsystem?",
        "options": [
            {
                "key": "A",
                "text": "Observer pattern"
            },
            {
                "key": "B",
                "text": "Factory method pattern"
            },
            {
                "key": "C",
                "text": "Facade pattern"
            },
            {
                "key": "D",
                "text": "Strategy pattern"
            }
        ],
        "answer": "C",
        "hint": "Gợi ý: Căn cứ theo nguyên lý kiến trúc chuẩn trong GoF Structural Patterns / Hassan Gomaa Ch 13.",
        "explanation": {
            "summary": "Facade pattern cung cấp một giao diện thống nhất, mức cao cho một tập hợp các interface trong một subsystem.",
            "breakdown": {
                "A": "Sai: Observer pattern. Không phù hợp với nguyên lý thiết kế.",
                "B": "Sai: Factory method pattern. Không phù hợp với nguyên lý thiết kế.",
                "C": "ĐÚNG: Facade pattern. Khẳng định chuẩn xác theo GoF Structural Patterns / Hassan Gomaa Ch 13.",
                "D": "Sai: Strategy pattern. Không phù hợp với nguyên lý thiết kế."
            }
        },
        "topic": "Design Patterns"
    },
    {
        "id": 4,
        "image": "../Quiz1/Q4.webp",
        "question": "What architectural style is predominantly used in the ATM System case study?",
        "options": [
            {
                "key": "A",
                "text": "Layered Architecture"
            },
            {
                "key": "B",
                "text": "Client-Server Architecture"
            },
            {
                "key": "C",
                "text": "Event-Driven Architecture"
            },
            {
                "key": "D",
                "text": "Peer-to-Peer Architecture"
            }
        ],
        "answer": "B",
        "hint": "Gợi ý: Căn cứ theo nguyên lý kiến trúc chuẩn trong Hassan Gomaa Ch 15 & 21 (Case Studies).",
        "explanation": {
            "summary": "ATM / Banking System là hệ thống Client/Server tập trung.",
            "breakdown": {
                "A": "Sai: Layered Architecture. Không phù hợp với nguyên lý thiết kế.",
                "B": "ĐÚNG: Client-Server Architecture. Khẳng định chuẩn xác theo Hassan Gomaa Ch 15 & 21 (Case Studies).",
                "C": "Sai: Event-Driven Architecture. Không phù hợp với nguyên lý thiết kế.",
                "D": "Sai: Peer-to-Peer Architecture. Không phù hợp với nguyên lý thiết kế."
            }
        },
        "topic": "Architectural Styles"
    },
    {
        "id": 5,
        "image": "../Quiz1/Q5.webp",
        "question": "What is a component in component-based software architecture?",
        "options": [
            {
                "key": "A",
                "text": "A function"
            },
            {
                "key": "B",
                "text": "A class"
            },
            {
                "key": "C",
                "text": "A database"
            },
            {
                "key": "D",
                "text": "A reusable piece of software"
            }
        ],
        "answer": "D",
        "hint": "Đặc tính nền tảng quan trọng nhất của kiến trúc dựa trên thành phần (CBSE) là tính khả chuyển và khả năng tái sử dụng độc lập.",
        "explanation": {
            "summary": "Trong Component-Based Software Architecture, một component (thành phần) là một đơn vị phần mềm đóng gói hoàn chỉnh, độc lập, có các cổng giao tiếp rõ ràng và có khả năng tái sử dụng (reusable piece of software) trong nhiều ứng dụng khác nhau.",
            "breakdown": {
                "A": "Sai: Một function (hàm) chỉ là một khối mã ở cấp độ vi mô, quá nhỏ để gọi là một component kiến trúc.",
                "B": "Sai: Một class (lớp) là khái niệm của OOP; một component thường được cấu thành từ nhiều class phối hợp với nhau.",
                "C": "Sai: Database là hệ quản trị dữ liệu, chỉ là một phần dịch vụ lưu trữ.",
                "D": "ĐÚNG: Khái niệm cốt lõi của Component là một khối phần mềm có tính độc lập cao và có thể tái sử dụng (a reusable piece of software)."
            }
        },
        "topic": "Component-Based Architecture"
    },
    {
        "id": 6,
        "image": "../Quiz1/Q6.webp",
        "question": "Which architectural style emphasizes loosely coupled services communicating through interfaces?",
        "options": [
            {
                "key": "A",
                "text": "Client-Server"
            },
            {
                "key": "B",
                "text": "Layered"
            },
            {
                "key": "C",
                "text": "Service-Oriented Architecture (SOA)"
            },
            {
                "key": "D",
                "text": "Pipe-and-Filter"
            }
        ],
        "answer": "C",
        "hint": "Từ khóa ở đây chính là 'services' (các dịch vụ) liên kết lỏng lẻo và giao tiếp qua chuẩn giao diện.",
        "explanation": {
            "summary": "Service-Oriented Architecture (SOA - Kiến trúc hướng dịch vụ) là phong cách kiến trúc trong đó các ứng dụng được cấu thành từ các dịch vụ (services) độc lập, liên kết lỏng lẻo (loosely coupled) và giao tiếp qua mạng bằng các giao diện dịch vụ (service interfaces) được chuẩn hóa.",
            "breakdown": {
                "A": "Sai: Client-Server tập trung vào quan hệ yêu cầu/phản hồi giữa trạm khách và máy chủ, không nhất thiết là kiến trúc các dịch vụ lỏng lẻo.",
                "B": "Sai: Layered Architecture sắp xếp mã nguồn thành các lớp phân cấp kế tiếp nhau.",
                "C": "ĐÚNG: Định nghĩa chuẩn của SOA: nhấn mạnh các dịch vụ độc lập, liên kết lỏng lẻo (loosely coupled services) trao đổi qua contracts/interfaces.",
                "D": "Sai: Pipe-and-Filter tập trung vào dòng chảy dữ liệu qua các bộ lọc biến đổi tuần tự."
            }
        },
        "topic": "Architectural Styles"
    },
    {
        "id": 7,
        "image": "../Quiz1/Q7.webp",
        "question": "If the same state machine is used in more than one use case, how is this modeled on interaction diagrams?",
        "options": [
            {
                "key": "A",
                "text": "Develop one state-dependent control object for each use case."
            },
            {
                "key": "B",
                "text": "Develop one state-dependent control object containing states from each use case."
            },
            {
                "key": "C",
                "text": "Develop a hierarchical state machine"
            },
            {
                "key": "D",
                "text": "Develop a coordinator object"
            }
        ],
        "answer": "B",
        "hint": "Căn cứ chuẩn theo giáo trình Software Modeling and Design (Hassan Gomaa) Chương 11: State-Dependent Dynamic Interaction Modeling.",
        "explanation": {
            "summary": "Đáp án chính xác theo đáp án chính thức của tác giả Hassan Gomaa (Chương 11: State-Dependent Dynamic Interaction Modeling, Câu 7): \"Develop one state-dependent control object containing states from each use case.\".",
            "breakdown": {
                "A": "Sai: Develop one state-dependent control object for each use case.. Lựa chọn này không phản ánh đúng định nghĩa/khái niệm của giáo trình.",
                "B": "ĐÚNG: Develop one state-dependent control object containing states from each use case.. Khẳng định chuẩn xác theo giáo trình của Hassan Gomaa.",
                "C": "Sai: Develop a hierarchical state machine. Lựa chọn này không phản ánh đúng định nghĩa/khái niệm của giáo trình.",
                "D": "Sai: Develop a coordinator object. Lựa chọn này không phản ánh đúng định nghĩa/khái niệm của giáo trình."
            }
        },
        "topic": "COMET Method & Statecharts"
    },
    {
        "id": 8,
        "image": "../Quiz1/Q8.webp",
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
        "hint": "Căn cứ chuẩn theo giáo trình Software Modeling and Design (Hassan Gomaa) Chương 14: Designing Object-Oriented Software Architectures.",
        "explanation": {
            "summary": "Đáp án chính xác theo đáp án chính thức của tác giả Hassan Gomaa (Chương 14: Designing Object-Oriented Software Architectures, Câu 1): \"A passive object that encapsulates data\".",
            "breakdown": {
                "A": "Sai: An active object that encapsulates data. Lựa chọn này không phản ánh đúng định nghĩa/khái niệm của giáo trình.",
                "B": "ĐÚNG: A passive object that encapsulates data. Khẳng định chuẩn xác theo giáo trình của Hassan Gomaa.",
                "C": "Sai: A class that encapsulates data. Lựa chọn này không phản ánh đúng định nghĩa/khái niệm của giáo trình.",
                "D": "Sai: A task that encapsulates data. Lựa chọn này không phản ánh đúng định nghĩa/khái niệm của giáo trình."
            }
        },
        "topic": "Object-Oriented Concepts & COMET"
    },
    {
        "id": 9,
        "image": "../Quiz1/Q9.webp",
        "question": "Which of the following best explains why iterative and incremental development is often preferred over the Waterfall model in modern software engineering?",
        "options": [
            {
                "key": "A",
                "text": "It reduces documentation requirements"
            },
            {
                "key": "B",
                "text": "It avoids stakeholder involvement during early phases"
            },
            {
                "key": "C",
                "text": "It allows progressive refinement of requirements and architecture with feedback loops"
            },
            {
                "key": "D",
                "text": "It eliminates the need for system testing"
            }
        ],
        "answer": "C",
        "hint": "Điểm mạnh nhất của mô hình lặp và tăng trưởng là khả năng nhận phản hồi sớm và tinh chỉnh dần qua từng chu kỳ.",
        "explanation": {
            "summary": "Mô hình phát triển lặp và tăng trưởng (Iterative & Incremental) cho phép tinh chỉnh liên tục các yêu cầu và thiết kế kiến trúc thông qua các vòng phản hồi (feedback loops) sau mỗi lần lặp, giúp giảm thiểu rủi ro và thích ứng nhanh với thay đổi so với mô hình Thác nước truyền thống.",
            "breakdown": {
                "A": "Sai: Mô hình lặp không nhằm mục đích cắt giảm tài liệu mà nhằm nâng cao khả năng thích ứng và chất lượng sản phẩm.",
                "B": "Sai: Ngược lại, mô hình lặp thúc đẩy sự tham gia liên tục của các bên liên quan (stakeholders) ngay từ đầu.",
                "C": "ĐÚNG: Phản ánh chính xác ưu điểm vượt trội: 'progressive refinement of requirements and architecture with feedback loops'.",
                "D": "Sai: Kiểm thử hệ thống vẫn là khâu bắt buộc ở mỗi chu kỳ lặp."
            }
        },
        "topic": "Software Development Life Cycle"
    },
    {
        "id": 10,
        "image": "../Quiz1/Q10.webp",
        "question": "Which normal form eliminates partial dependency on a composite primary key?",
        "options": [
            {
                "key": "A",
                "text": "1NF"
            },
            {
                "key": "B",
                "text": "2NF"
            },
            {
                "key": "C",
                "text": "3NF"
            },
            {
                "key": "D",
                "text": "BCNF"
            }
        ],
        "answer": "B",
        "hint": "Gợi ý: Căn cứ theo nguyên lý kiến trúc chuẩn trong Database Theory / Gomaa Ch 15.",
        "explanation": {
            "summary": "Dạng chuẩn 2 (2NF) loại bỏ phụ thuộc hàm bộ phận vào khóa chính hợp thành.",
            "breakdown": {
                "A": "Sai: 1NF. Không phù hợp với nguyên lý thiết kế.",
                "B": "ĐÚNG: 2NF. Khẳng định chuẩn xác theo Database Theory / Gomaa Ch 15.",
                "C": "Sai: 3NF. Không phù hợp với nguyên lý thiết kế.",
                "D": "Sai: BCNF. Không phù hợp với nguyên lý thiết kế."
            }
        },
        "topic": "Database Normalization"
    },
    {
        "id": 11,
        "image": "../Quiz1/Q11.webp",
        "question": "What does a delegation connector join?",
        "options": [
            {
                "key": "A",
                "text": "An outer provided port to an inner provided port"
            },
            {
                "key": "B",
                "text": "An outer provided port to an inner required port"
            },
            {
                "key": "C",
                "text": "An outer required port to an inner provided port"
            },
            {
                "key": "D",
                "text": "An outer provided port to an outer required port"
            }
        ],
        "answer": "A",
        "hint": "Căn cứ chuẩn theo giáo trình Software Modeling and Design (Hassan Gomaa) Chương 17: Designing Component-Based Software Architectures.",
        "explanation": {
            "summary": "Đáp án chính xác theo đáp án chính thức của tác giả Hassan Gomaa (Chương 17: Designing Component-Based Software Architectures, Câu 6): \"An outer provided port to an inner provided port\".",
            "breakdown": {
                "A": "ĐÚNG: An outer provided port to an inner provided port. Khẳng định chuẩn xác theo giáo trình của Hassan Gomaa.",
                "B": "Sai: An outer provided port to an inner required port. Lựa chọn này không phản ánh đúng định nghĩa/khái niệm của giáo trình.",
                "C": "Sai: An outer required port to an inner provided port. Lựa chọn này không phản ánh đúng định nghĩa/khái niệm của giáo trình.",
                "D": "Sai: An outer provided port to an outer required port. Lựa chọn này không phản ánh đúng định nghĩa/khái niệm của giáo trình."
            }
        },
        "topic": "UML Component Modeling"
    },
    {
        "id": 12,
        "image": "../Quiz1/Q12.webp",
        "question": "What type of object coordinates behavior among multiple objects?",
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
                "text": "Interface object"
            }
        ],
        "answer": "C",
        "hint": "Theo mô hình phân tích ECB (Entity - Control - Boundary), loại đối tượng nào đóng vai trò 'nhạc trưởng' điều phối hoạt động?",
        "explanation": {
            "summary": "Trong mô hình hóa hướng đối tượng (theo COMET / Jacobson ECB), Control Object (đối tượng điều khiển) là đối tượng chịu trách nhiệm điều phối hành vi (coordinates behavior), điều khiển luồng nghiệp vụ và sắp xếp trình tự thực thi giữa các đối tượng khác trong một use case.",
            "breakdown": {
                "A": "Sai: Entity object lưu trữ thông tin/dữ liệu lâu dài của hệ thống.",
                "B": "Sai: Boundary object đóng vai trò tương tác giữa hệ thống với người dùng hoặc thiết bị ngoại vi.",
                "C": "ĐÚNG: Control object đảm nhận vai trò điều phối hành vi và dòng điều khiển giữa nhiều đối tượng.",
                "D": "Sai: Interface object là tên gọi khác/thành phần của boundary, không phải đối tượng điều phối."
            }
        },
        "topic": "Object-Oriented Analysis (COMET)"
    },
    {
        "id": 13,
        "image": "../Quiz1/Q13.webp",
        "question": "Which of the following patterns allows treating individual objects and compositions of objects uniformly?",
        "options": [
            {
                "key": "A",
                "text": "Composite"
            },
            {
                "key": "B",
                "text": "Decorator"
            },
            {
                "key": "C",
                "text": "Adapter"
            },
            {
                "key": "D",
                "text": "Proxy"
            }
        ],
        "answer": "A",
        "hint": "Gợi ý: Căn cứ theo nguyên lý kiến trúc chuẩn trong GoF Structural Patterns.",
        "explanation": {
            "summary": "Composite pattern tổ chức các đối tượng theo cấu trúc cây (tree structure) và cho phép client đối xử với đối tượng đơn và tập hợp một cách đồng nhất.",
            "breakdown": {
                "A": "ĐÚNG: Composite. Khẳng định chuẩn xác theo GoF Structural Patterns.",
                "B": "Sai: Decorator. Không phù hợp với nguyên lý thiết kế.",
                "C": "Sai: Adapter. Không phù hợp với nguyên lý thiết kế.",
                "D": "Sai: Proxy. Không phù hợp với nguyên lý thiết kế."
            }
        },
        "topic": "Design Patterns"
    },
    {
        "id": 14,
        "image": "../Quiz1/Q14.webp",
        "question": "Which design pattern attaches additional responsibilities to an object dynamically?",
        "options": [
            {
                "key": "A",
                "text": "Proxy"
            },
            {
                "key": "B",
                "text": "Decorator"
            },
            {
                "key": "C",
                "text": "Composite"
            },
            {
                "key": "D",
                "text": "Bridge"
            }
        ],
        "answer": "B",
        "hint": "Gợi ý: Căn cứ theo nguyên lý kiến trúc chuẩn trong GoF Structural Patterns.",
        "explanation": {
            "summary": "Decorator pattern gán thêm trách nhiệm động cho đối tượng tại thời điểm thực thi thay thế cho kế thừa tĩnh.",
            "breakdown": {
                "A": "Sai: Proxy. Không phù hợp với nguyên lý thiết kế.",
                "B": "ĐÚNG: Decorator. Khẳng định chuẩn xác theo GoF Structural Patterns.",
                "C": "Sai: Composite. Không phù hợp với nguyên lý thiết kế.",
                "D": "Sai: Bridge. Không phù hợp với nguyên lý thiết kế."
            }
        },
        "topic": "Design Patterns"
    },
    {
        "id": 15,
        "image": "../Quiz1/Q15.webp",
        "question": "Which of the following is NOT a case of event synchronization?",
        "options": [
            {
                "key": "A",
                "text": "External event"
            },
            {
                "key": "B",
                "text": "Internal event"
            },
            {
                "key": "C",
                "text": "Timer event"
            },
            {
                "key": "D",
                "text": "User event"
            }
        ],
        "answer": "D",
        "hint": "Căn cứ chuẩn theo giáo trình Software Modeling and Design (Hassan Gomaa) Chương 18: Designing Concurrent and Real-Time Software Architectures.",
        "explanation": {
            "summary": "Đáp án chính xác theo đáp án chính thức của tác giả Hassan Gomaa (Chương 18: Designing Concurrent and Real-Time Software Architectures, Câu 10): \"User event\".",
            "breakdown": {
                "A": "Sai: External event. Lựa chọn này không phản ánh đúng định nghĩa/khái niệm của giáo trình.",
                "B": "Sai: Internal event. Lựa chọn này không phản ánh đúng định nghĩa/khái niệm của giáo trình.",
                "C": "Sai: Timer event. Lựa chọn này không phản ánh đúng định nghĩa/khái niệm của giáo trình.",
                "D": "ĐÚNG: User event. Khẳng định chuẩn xác theo giáo trình của Hassan Gomaa."
            }
        },
        "topic": "Concurrent Systems & COMET"
    },
    {
        "id": 16,
        "image": "../Quiz1/Q16.webp",
        "question": "A subsystem provides a larger-grained information-hiding solution than an object. Objects that realize the same use case have higher coupling because they communicate with each other (as depicted on the use case-based interaction diagram) and have lower (or no) coupling with objects in other use cases.",
        "options": [
            {
                "key": "A",
                "text": "True"
            },
            {
                "key": "B",
                "text": "False"
            }
        ],
        "answer": "A",
        "hint": "Đây là nguyên lý phân chia subsystem trong COMET: các đối tượng cùng tham gia một use case sẽ liên kết chặt với nhau và lỏng lẻo với các use case khác.",
        "explanation": {
            "summary": "Phát biểu này là TRUE (Đúng). Đây là nguyên văn định lý phân rã hệ thống con trong sách của Hassan Gomaa: Subsystem cung cấp giải pháp che giấu thông tin ở mức hạt lớn hơn object; các đối tượng trong cùng một use case có tính gắn kết (coupling) cao do trao đổi thông điệp thường xuyên, và có rất ít hoặc không có liên kết với đối tượng của các use case khác.",
            "breakdown": {
                "A": "ĐÚNG: Khẳng định hoàn toàn đúng với nguyên lý thiết kế Subsystem theo COMET: tính gắn kết nội bộ cao (high cohesion/coupling inside) và độc lập bên ngoài (low coupling outside).",
                "B": "Sai: Lựa chọn ngược lại."
            }
        },
        "topic": "Subsystem Design (COMET)"
    },
    {
        "id": 17,
        "image": "../Quiz1/Q17.webp",
        "question": "In SOA, what is the role of the service bus?",
        "options": [
            {
                "key": "A",
                "text": "It serves only as a message queue."
            },
            {
                "key": "B",
                "text": "It acts as an intermediary for all service calls, functioning as an integration hub and orchestration engine."
            },
            {
                "key": "C",
                "text": "It is responsible for data persistence."
            },
            {
                "key": "D",
                "text": "It handles only user interface requests."
            }
        ],
        "answer": "B",
        "hint": "Enterprise Service Bus (ESB) là 'trục xương sống' trung gian giúp tích hợp, định tuyến và điều phối mọi cuộc gọi giữa các dịch vụ.",
        "explanation": {
            "summary": "Trong kiến trúc hướng dịch vụ (SOA), Enterprise Service Bus (ESB) hoạt động như một thành phần trung gian trung tâm cho tất cả các cuộc gọi dịch vụ, đóng vai trò là một trung tâm tích hợp (integration hub), định tuyến thông điệp và động cơ điều phối dịch vụ (orchestration engine).",
            "breakdown": {
                "A": "Sai: ESB có nhiều năng lực hơn một message queue thông thường (chuyển đổi dữ liệu, định tuyến phức tạp, bảo mật...).",
                "B": "ĐÚNG: ESB hoạt động như một cầu nối trung gian điều phối và tích hợp toàn diện mọi giao tiếp dịch vụ.",
                "C": "Sai: Lưu trữ bền vững dữ liệu là trách nhiệm của Database/Persistence Layer, không phải Service Bus.",
                "D": "Sai: Service Bus phục vụ trao đổi giữa các dịch vụ backend, không chỉ xử lý yêu cầu giao diện người dùng."
            }
        },
        "topic": "Service-Oriented Architecture (SOA)"
    },
    {
        "id": 18,
        "image": "../Quiz1/Q18.webp",
        "question": "What is a deployment view of a software architecture?",
        "options": [
            {
                "key": "A",
                "text": "A static view in terms of a module hierarchy"
            },
            {
                "key": "B",
                "text": "A static view in terms of components and connectors"
            },
            {
                "key": "C",
                "text": "A view of the physical configuration in terms of nodes and interconnections"
            },
            {
                "key": "D",
                "text": "A dynamic interaction view in terms of objects and messages"
            }
        ],
        "answer": "C",
        "hint": "Khung nhìn 'triển khai' (deployment) luôn gắn với khía cạnh vật lý: các nút tính toán (nodes) và đường truyền mạng (interconnections).",
        "explanation": {
            "summary": "Khung nhìn triển khai (Deployment View) trong kiến trúc phần mềm thể hiện cấu hình vật lý của hệ thống: ánh xạ các thành phần phần mềm vào các nút phần cứng tính toán (nodes) và các đường truyền liên kết vật lý (interconnections) giữa chúng.",
            "breakdown": {
                "A": "Sai: Module hierarchy thuộc về Module/Development View.",
                "B": "Sai: Components and connectors thuộc về Component/Logical View.",
                "C": "ĐÚNG: Deployment View thể hiện cấu hình vật lý bao gồm các nodes và interconnections.",
                "D": "Sai: Objects and messages thuộc về Dynamic/Process View."
            }
        },
        "topic": "Architectural Views"
    },
    {
        "id": 19,
        "image": "../Quiz1/Q19.webp",
        "question": "Which of the following is NOT a benefit of using software models?",
        "options": [
            {
                "key": "A",
                "text": "Better communication between stakeholders"
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
        "answer": "C",
        "hint": "Mô hình hóa phần mềm giúp tối ưu tư duy và thiết kế, nhưng nó không thể tự động nâng cấp năng lực của phần cứng máy tính.",
        "explanation": {
            "summary": "Mô hình phần mềm (software models) mang lại nhiều lợi ích thiết thực như tăng cường trao đổi giữa các bên, giúp dễ bảo trì và phát hiện sớm các khiếm khuyết thiết kế. Tuy nhiên, việc vẽ mô hình phần mềm không thể trực tiếp làm tăng hiệu năng phần cứng (increased hardware performance).",
            "breakdown": {
                "A": "Sai: Đây là một lợi ích rất quan trọng của mô hình hóa.",
                "B": "Sai: Đây cũng là một lợi ích lâu dài của mô hình kiến trúc tốt.",
                "C": "ĐÚNG (NOT a benefit): Mô hình phần mềm không làm phần cứng (CPU, RAM, Disk) mạnh lên được.",
                "D": "Sai: Phát hiện lỗi thiết kế sớm là lợi ích cốt lõi của giai đoạn mô hình hóa."
            }
        },
        "topic": "Software Modeling Fundamentals"
    },
    {
        "id": 20,
        "image": "../Quiz1/Q20.webp",
        "question": "Which of the following is true for a Centralized Control architectural pattern?",
        "options": [
            {
                "key": "A",
                "text": "Control is divided among various control components."
            },
            {
                "key": "B",
                "text": "It provides the overall control and sequencing of the system."
            },
            {
                "key": "C",
                "text": "It provides overall control by coordinating several control components."
            },
            {
                "key": "D",
                "text": "It provides overall control over various I/O objects"
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
                "D": "Sai: It provides overall control over various I/O objects. Lựa chọn này không phản ánh đúng định nghĩa/khái niệm của giáo trình."
            }
        },
        "topic": "Control Patterns (COMET)"
    },
    {
        "id": 21,
        "image": "../Quiz1/Q21.webp",
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
        "answer": "C",
        "hint": "Căn cứ chuẩn theo giáo trình Software Modeling and Design (Hassan Gomaa) Chương 15: Designing Client/Server Software Architectures.",
        "explanation": {
            "summary": "Đáp án chính xác theo đáp án chính thức của tác giả Hassan Gomaa (Chương 15: Designing Client/Server Software Architectures, Câu 7): \"A class that encapsulates the details of how to access data in a database\".",
            "breakdown": {
                "A": "Sai: A class that encapsulates a data structure. Lựa chọn này không phản ánh đúng định nghĩa/khái niệm của giáo trình.",
                "B": "Sai: A class that encapsulates a database. Lựa chọn này không phản ánh đúng định nghĩa/khái niệm của giáo trình.",
                "C": "ĐÚNG: A class that encapsulates the details of how to access data in a database. Khẳng định chuẩn xác theo giáo trình của Hassan Gomaa.",
                "D": "Sai: A class that encapsulates a relational table. Lựa chọn này không phản ánh đúng định nghĩa/khái niệm của giáo trình."
            }
        },
        "topic": "Information Hiding Classes (COMET)"
    },
    {
        "id": 22,
        "image": "../Quiz1/Q22.webp",
        "question": "What does an interaction diagram depict?",
        "options": [
            {
                "key": "A",
                "text": "The state and transitions inside a control object"
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
        "answer": "C",
        "hint": "Căn cứ chuẩn theo giáo trình Software Modeling and Design (Hassan Gomaa) Chương 9: Dynamic Interaction Modeling.",
        "explanation": {
            "summary": "Đáp án chính xác theo đáp án chính thức của tác giả Hassan Gomaa (Chương 9: Dynamic Interaction Modeling, Câu 1): \"Software objects and the sequence of their interactions\".",
            "breakdown": {
                "A": "Sai: The state and transitions inside a control object. Lựa chọn này không phản ánh đúng định nghĩa/khái niệm của giáo trình.",
                "B": "Sai: Classes and their relationships. Lựa chọn này không phản ánh đúng định nghĩa/khái niệm của giáo trình.",
                "C": "ĐÚNG: Software objects and the sequence of their interactions. Khẳng định chuẩn xác theo giáo trình của Hassan Gomaa.",
                "D": "Sai: The external objects communicating with the system. Lựa chọn này không phản ánh đúng định nghĩa/khái niệm của giáo trình."
            }
        },
        "topic": "UML Interaction Diagrams"
    },
    {
        "id": 23,
        "image": "../Quiz1/Q23.webp",
        "question": "How does Event-Driven Architecture work?",
        "options": [
            {
                "key": "A",
                "text": "Components communicate via asynchronous events"
            },
            {
                "key": "B",
                "text": "Components communicate synchronously"
            },
            {
                "key": "C",
                "text": "Components are tightly coupled"
            },
            {
                "key": "D",
                "text": "Components must share the database"
            }
        ],
        "answer": "A",
        "hint": "Đặc trưng cốt tử của kiến trúc hướng sự kiện là giao tiếp bất đồng bộ (asynchronous) để các bên không phải chờ đợi nhau.",
        "explanation": {
            "summary": "Trong Kiến trúc hướng sự kiện (Event-Driven Architecture - EDA), các thành phần phần mềm phát ra và tiếp nhận các sự kiện bất đồng bộ (asynchronous events), giúp giảm thiểu tối đa độ phụ thuộc (loose coupling) và tăng khả năng phản hồi của hệ thống.",
            "breakdown": {
                "A": "ĐÚNG: Các thành phần giao tiếp qua các sự kiện bất đồng bộ (Components communicate via asynchronous events).",
                "B": "Sai: EDA chủ yếu dựa trên bất đồng bộ; đồng bộ (synchronous) là phong cách gọi hàm trực tiếp (RPC/REST thông thường).",
                "C": "Sai: EDA mang lại tính liên kết lỏng lẻo (loosely coupled), không phải liên kết chặt (tightly coupled).",
                "D": "Sai: EDA không bắt buộc các thành phần phải dùng chung cơ sở dữ liệu."
            }
        },
        "topic": "Architectural Styles"
    },
    {
        "id": 24,
        "image": "../Quiz1/Q24.webp",
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
        "answer": "C",
        "hint": "Căn cứ chuẩn theo giáo trình Software Modeling and Design (Hassan Gomaa) Chương 9: Dynamic Interaction Modeling.",
        "explanation": {
            "summary": "Đáp án chính xác theo đáp án chính thức của tác giả Hassan Gomaa (Chương 9: Dynamic Interaction Modeling, Câu 3): \"Software objects and the sequence of their interactions\".",
            "breakdown": {
                "A": "Sai: The sequence of external objects communicating with each other. Lựa chọn này không phản ánh đúng định nghĩa/khái niệm của giáo trình.",
                "B": "Sai: Classes and their relationships. Lựa chọn này không phản ánh đúng định nghĩa/khái niệm của giáo trình.",
                "C": "ĐÚNG: Software objects and the sequence of their interactions. Khẳng định chuẩn xác theo giáo trình của Hassan Gomaa.",
                "D": "Sai: The external objects communicating with the system. Lựa chọn này không phản ánh đúng định nghĩa/khái niệm của giáo trình."
            }
        },
        "topic": "UML Interaction Diagrams"
    },
    {
        "id": 25,
        "image": "../Quiz1/Q25.webp",
        "question": "Which of the following is a primary focus in software architectural design when analyzing the problem domain and structuring a system into subsystems?",
        "options": [
            {
                "key": "A",
                "text": "Ensuring that all subsystems are tightly coupled for better performance."
            },
            {
                "key": "B",
                "text": "Focusing on functional decomposition, where each subsystem addresses a distinct part of the system."
            },
            {
                "key": "C",
                "text": "Minimizing the number of subsystems to simplify the system design."
            },
            {
                "key": "D",
                "text": "Ignoring the geographical distribution of components during subsystem design."
            }
        ],
        "answer": "B",
        "hint": "Khi phân rã một hệ thống lớn thành các phân hệ, mục tiêu là phân chia theo chức năng nghiệp vụ riêng biệt để đảm bảo tính độc lập.",
        "explanation": {
            "summary": "Khi phân tích miền bài toán và cấu trúc hệ thống thành các hệ thống con (subsystems), trọng tâm hàng đầu là phân rã chức năng (functional decomposition), đảm bảo mỗi subsystem giải quyết một phần nhiệm vụ riêng biệt của hệ thống với độ gắn kết cao và liên kết lỏng lẻo.",
            "breakdown": {
                "A": "Sai: Thiết kế kiến trúc tốt luôn hướng đến loosely coupled (liên kết lỏng), không bao giờ cố ý tạo tightly coupled.",
                "B": "ĐÚNG: Tập trung vào phân rã chức năng, mỗi subsystem giải quyết một phần riêng biệt và rõ ràng của hệ thống.",
                "C": "Sai: Giảm thiểu số lượng subsystem quá mức có thể dẫn đến hệ thống nguyên khối (monolithic) cồng kềnh, khó quản lý.",
                "D": "Sai: Phân bổ địa lý của các thành phần là yếu tố kiến trúc then chốt cần xem xét kỹ, không thể bỏ qua."
            }
        },
        "topic": "Subsystem Architectural Design"
    },
    {
        "id": 26,
        "image": "../Quiz1/Q26.webp",
        "question": "Which of the following best describes the information hiding concept in software design?",
        "options": [
            {
                "key": "A",
                "text": "A class exposes all its data structures to allow flexibility in communication."
            },
            {
                "key": "B",
                "text": "A class hides certain details, such as a data structure, internally and keeps them inaccessible to the rest of the system."
            },
            {
                "key": "C",
                "text": "A class combines its interface and implementation to simplify design."
            },
            {
                "key": "D",
                "text": "A class prioritizes synchronous communication between objects."
            }
        ],
        "answer": "B",
        "hint": "Nguyên lý giấu thông tin của Parnas nhấn mạnh việc ẩn cấu trúc dữ liệu nội bộ và ngăn truy cập trực tiếp từ bên ngoài.",
        "explanation": {
            "summary": "Nguyên lý Che giấu thông tin (Information Hiding do David Parnas khởi xướng) khẳng định rằng một lớp/mô-đun nên giấu kín các chi tiết cài đặt dễ thay đổi (chẳng hạn như cấu trúc dữ liệu lưu trữ) ở bên trong và ngăn chặn các thành phần khác truy cập trực tiếp, chỉ cho phép thao tác qua các hàm giao diện công khai.",
            "breakdown": {
                "A": "Sai: Công khai cấu trúc dữ liệu nội bộ là vi phạm hoàn toàn nguyên lý che giấu thông tin.",
                "B": "ĐÚNG: Một lớp giấu kín các chi tiết cụ thể (như cấu trúc dữ liệu) và ngăn không cho phần còn lại của hệ thống truy cập trực tiếp.",
                "C": "Sai: Information hiding phân tách rạch ròi giữa giao diện (interface) và hiện thực (implementation), chứ không gộp chung.",
                "D": "Sai: Không liên quan đến nguyên lý che giấu thông tin."
            }
        },
        "topic": "Information Hiding"
    },
    {
        "id": 27,
        "image": "../Quiz1/Q27.webp",
        "question": "What is the key characteristic of a component in a component-based software architecture?",
        "options": [
            {
                "key": "A",
                "text": "It must be implemented in Java"
            },
            {
                "key": "B",
                "text": "It shares all internal data with other components"
            },
            {
                "key": "C",
                "text": "It is self-contained and encapsulates information"
            },
            {
                "key": "D",
                "text": "t must be deployed on the cloud"
            }
        ],
        "answer": "C",
        "hint": "Một component phải có tính độc lập, tự chủ (self-contained) và bao đóng dữ liệu của chính mình.",
        "explanation": {
            "summary": "Đặc tính then chốt của một component trong kiến trúc phần mềm dựa trên thành phần là tính độc lập tự chủ (self-contained) và đóng gói trọn vẹn thông tin/chức năng (encapsulates information), giúp nó có thể được thay thế hoặc tái sử dụng mà không làm ảnh hưởng đến các thành phần khác.",
            "breakdown": {
                "A": "Sai: Component độc lập với ngôn ngữ lập trình, có thể viết bằng bất kỳ ngôn ngữ nào.",
                "B": "Sai: Chia sẻ toàn bộ dữ liệu nội bộ vi phạm nguyên tắc đóng gói (encapsulation).",
                "C": "ĐÚNG: Đặc trưng cốt lõi: 'It is self-contained and encapsulates information'.",
                "D": "Sai: Component có thể triển khai ở bất kỳ môi trường nào (desktop, embedded, on-premise, cloud)."
            }
        },
        "topic": "Component-Based Architecture"
    },
    {
        "id": 28,
        "image": "../Quiz1/Q28.webp",
        "question": "What is the main goal of object-oriented analysis in software engineering?",
        "options": [
            {
                "key": "A",
                "text": "Define user interface layouts"
            },
            {
                "key": "B",
                "text": "Identify the system's objects and their relationships"
            },
            {
                "key": "C",
                "text": "Optimize database queries"
            },
            {
                "key": "D",
                "text": "Develop a deployment model"
            }
        ],
        "answer": "B",
        "hint": "Giai đoạn phân tích hướng đối tượng (OOA) nhằm hiểu bài toán để tìm ra các đối tượng (objects) và mối quan hệ giữa chúng.",
        "explanation": {
            "summary": "Mục tiêu trọng tâm của Phân tích hướng đối tượng (Object-Oriented Analysis - OOA) là nghiên cứu miền bài toán để nhận diện các đối tượng trong hệ thống (objects) cùng với các mối quan hệ (relationships) và tương tác giữa chúng trước khi đưa ra quyết định thiết kế kỹ thuật cụ thể.",
            "breakdown": {
                "A": "Sai: Thiết kế bố cục giao diện thuộc về UI/UX Design.",
                "B": "ĐÚNG: Mục tiêu chính của OOA là xác định các đối tượng trong hệ thống và mối quan hệ giữa chúng.",
                "C": "Sai: Tối ưu hóa truy vấn CSDL thuộc về giai đoạn thiết kế chi tiết/cài đặt (Implementation & Optimization).",
                "D": "Sai: Xây dựng mô hình triển khai thuộc về giai đoạn thiết kế kiến trúc hệ thống (Architectural Design)."
            }
        },
        "topic": "Object-Oriented Analysis"
    },
    {
        "id": 29,
        "image": "../Quiz1/Q29.webp",
        "question": "What is the purpose of \"product line engineering\"?",
        "options": [
            {
                "key": "A",
                "text": "To develop and maintain a specific product within the line"
            },
            {
                "key": "B",
                "text": "To establish the processes, tools, and methods for developing and evolving the product line"
            },
            {
                "key": "C",
                "text": "To market and sell individual products"
            },
            {
                "key": "D",
                "text": "To ensure that each product meets its unique requirements"
            }
        ],
        "answer": "B",
        "hint": "Kỹ nghệ dòng sản phẩm phần mềm (SPLE) tập trung vào việc tạo ra quy trình, phương pháp và công cụ nền tảng để phát triển toàn bộ dòng sản phẩm.",
        "explanation": {
            "summary": "Theo lý thuyết Software Product Line Engineering (Hassan Gomaa / SEI), kỹ nghệ dòng sản phẩm nhằm mục đích thiết lập các quy trình, công cụ và phương pháp (processes, tools, and methods) phục vụ cho việc phát triển và tiến hóa toàn bộ dòng sản phẩm có thể tái sử dụng có hệ thống.",
            "breakdown": {
                "A": "Sai: Phát triển và bảo trì một sản phẩm đơn lẻ là mục tiêu của 'Software Product Engineering' (kỹ nghệ sản phẩm con), không phải toàn bộ 'Product Line Engineering'.",
                "B": "ĐÚNG: Định nghĩa chuẩn: 'To establish the processes, tools, and methods for developing and evolving the product line'.",
                "C": "Sai: Tiếp thị và bán hàng thuộc về lĩnh vực kinh doanh, không phải kỹ nghệ phần mềm.",
                "D": "Sai: Đây là nhiệm vụ của việc phát triển ứng dụng cụ thể trong dòng sản phẩm."
            }
        },
        "topic": "Software Product Line Engineering"
    },
    {
        "id": 30,
        "image": "../Quiz1/Q30.webp",
        "question": "What is a key consideration in component partitioning?",
        "options": [
            {
                "key": "A",
                "text": "Programming language used"
            },
            {
                "key": "B",
                "text": "Hardware the system will run on"
            },
            {
                "key": "C",
                "text": "Whether to partition by domain or technical capabilities"
            },
            {
                "key": "D",
                "text": "UI color scheme"
            }
        ],
        "answer": "C",
        "hint": "Cân nhắc mang tính chiến lược là chia thành phần theo nghiệp vụ chuyên môn (domain) hay chia theo tầng công nghệ (technical layers).",
        "explanation": {
            "summary": "Trong thiết kế phân chia thành phần (Component Partitioning), cân nhắc kiến trúc then chốt là quyết định chiến lược phân chia: phân chia theo nghiệp vụ/miền bài toán (domain capabilities - như Sales, Billing, Inventory) hay phân chia theo năng lực kỹ thuật (technical capabilities - như Logging, Security, Data Access).",
            "breakdown": {
                "A": "Sai: Ngôn ngữ lập trình là chi tiết công nghệ cài đặt sau.",
                "B": "Sai: Phần cứng là yếu tố triển khai vật lý, không phải tiêu chí chính để phân chia logic component.",
                "C": "ĐÚNG: Tiêu chí kiến trúc then chốt: quyết định phân chia theo domain hay theo technical capabilities.",
                "D": "Sai: Bảng màu giao diện chỉ là yếu tố thẩm mỹ bên ngoài."
            }
        },
        "topic": "Component Partitioning"
    },
    {
        "id": 31,
        "image": "../Quiz1/Q31.webp",
        "question": "In the sales problem, to pay, customers can use cash or card payment, so what is the relationship between the Payment use case and the Cash payment use case?",
        "options": [
            {
                "key": "A",
                "text": "Extend"
            },
            {
                "key": "B",
                "text": "Include"
            },
            {
                "key": "C",
                "text": "Generalization"
            },
            {
                "key": "D",
                "text": "Abstract"
            }
        ],
        "answer": "C",
        "hint": "Payment là ca sử dụng tổng quát (cha), còn Cash payment và Card payment là các dạng chuyên biệt hóa (con) kế thừa từ nó.",
        "explanation": {
            "summary": "Trong mô hình hóa Use Case (UML / COMET), 'Payment' là use case tổng quát mô tả hành vi thanh toán chung. 'Cash payment' (thanh toán tiền mặt) là một trường hợp chuyên biệt hóa cụ thể của Payment. Mối quan hệ giữa ca sử dụng chuyên biệt và ca sử dụng tổng quát là quan hệ Tổng quát hóa (Generalization / Inheritance).",
            "breakdown": {
                "A": "Sai: Extend dùng khi một use case bổ sung hành vi tùy chọn/có điều kiện vào use case khác tại extension point.",
                "B": "Sai: Include dùng khi một use case bắt buộc phải gọi thực thi hành vi chung của một use case khác.",
                "C": "ĐÚNG: Cash payment là một dạng cụ thể của Payment -> Quan hệ Generalization (Tổng quát hóa / Kế thừa).",
                "D": "Sai: Abstract là tính chất của use case không thể thực thi độc lập, không phải tên mối quan hệ kết nối giữa 2 use case."
            }
        },
        "topic": "Use Case Modeling"
    },
    {
        "id": 32,
        "image": "../Quiz1/Q32.webp",
        "question": "What is data abstraction?",
        "options": [
            {
                "key": "A",
                "text": "Another name for information hiding"
            },
            {
                "key": "B",
                "text": "Encapsulating data so that its structure is hidden"
            },
            {
                "key": "C",
                "text": "Storing data in a database"
            },
            {
                "key": "D",
                "text": "Storing data in a data structure"
            }
        ],
        "answer": "B",
        "hint": "Căn cứ chuẩn theo giáo trình Software Modeling and Design (Hassan Gomaa) Chương 4: Software Design and Architecture Concepts.",
        "explanation": {
            "summary": "Đáp án chính xác theo đáp án chính thức của tác giả Hassan Gomaa (Chương 4: Software Design and Architecture Concepts, Câu 9): \"Encapsulating data so that its structure is hidden\".",
            "breakdown": {
                "A": "Sai: Another name for information hiding. Lựa chọn này không phản ánh đúng định nghĩa/khái niệm của giáo trình.",
                "B": "ĐÚNG: Encapsulating data so that its structure is hidden. Khẳng định chuẩn xác theo giáo trình của Hassan Gomaa.",
                "C": "Sai: Storing data in a database. Lựa chọn này không phản ánh đúng định nghĩa/khái niệm của giáo trình.",
                "D": "Sai: Storing data in a data structure. Lựa chọn này không phản ánh đúng định nghĩa/khái niệm của giáo trình."
            }
        },
        "topic": "Object-Oriented Concepts"
    },
    {
        "id": 33,
        "image": "../Quiz1/Q33.webp",
        "question": "What is a SPL feature?",
        "options": [
            {
                "key": "A",
                "text": "A requirement or characteristic that is provided by one or more SPL members"
            },
            {
                "key": "B",
                "text": "A marketing need"
            },
            {
                "key": "C",
                "text": "A class provided by the SPL"
            },
            {
                "key": "D",
                "text": "A SPL use case"
            }
        ],
        "answer": "A",
        "hint": "Gợi ý: Căn cứ theo nguyên lý kiến trúc chuẩn trong Hassan Gomaa Ch 19 (SPL).",
        "explanation": {
            "summary": "Feature trong SPL là một yêu cầu hoặc đặc tính chức năng được cung cấp bởi một hoặc nhiều thành viên trong dòng sản phẩm.",
            "breakdown": {
                "A": "ĐÚNG: A requirement or characteristic that is provided by one or more SPL members. Khẳng định chuẩn xác theo Hassan Gomaa Ch 19 (SPL).",
                "B": "Sai: A marketing need. Không phù hợp với nguyên lý thiết kế.",
                "C": "Sai: A class provided by the SPL. Không phù hợp với nguyên lý thiết kế.",
                "D": "Sai: A SPL use case. Không phù hợp với nguyên lý thiết kế."
            }
        },
        "topic": "Software Product Line Engineering"
    },
    {
        "id": 34,
        "image": "../Quiz1/Q34.webp",
        "question": "In COMET, which diagram integrates static and dynamic models for software design?",
        "options": [
            {
                "key": "A",
                "text": "Statechart diagram"
            },
            {
                "key": "B",
                "text": "Interaction diagram"
            },
            {
                "key": "C",
                "text": "Composite class interaction diagram"
            },
            {
                "key": "D",
                "text": "Package diagram"
            }
        ],
        "answer": "C",
        "hint": "Biểu đồ này kết hợp (composite) cả các lớp thuộc mô hình tĩnh và các thông điệp trao đổi thuộc mô hình động.",
        "explanation": {
            "summary": "Trong phương pháp COMET của Hassan Gomaa, Composite Class Interaction Diagram (biểu đồ tương tác lớp tổng hợp) là biểu đồ được sử dụng để tích hợp mô hình tĩnh (các class, thuộc tính và thao tác) với mô hình động (các thông điệp, trình tự tương tác) trong giai đoạn thiết kế chi tiết.",
            "breakdown": {
                "A": "Sai: Statechart chỉ thể hiện trạng thái và chuyển đổi của một lớp đơn lẻ (mô hình động).",
                "B": "Sai: Interaction diagram thông thường mô tả tương tác giữa các instance/đối tượng.",
                "C": "ĐÚNG: Khái niệm đặc trưng của COMET: 'Composite class interaction diagram' tích hợp cả khía cạnh lớp tĩnh và tương tác động.",
                "D": "Sai: Package diagram chỉ nhóm các phần tử mô hình ở cấp cao."
            }
        },
        "topic": "COMET Detailed Design"
    },
    {
        "id": 35,
        "image": "../Quiz1/Q35.webp",
        "question": "Which architectural style organizes the system into a hierarchy of layers, each layer providing services to the layer above?",
        "options": [
            {
                "key": "A",
                "text": "Client-server architecture"
            },
            {
                "key": "B",
                "text": "Layered architecture"
            },
            {
                "key": "C",
                "text": "Peer-to-peer architecture"
            },
            {
                "key": "D",
                "text": "Pipe and filter architecture"
            }
        ],
        "answer": "B",
        "hint": "Hệ thống được tổ chức thành các tầng (layers) phân cấp chồng lên nhau, tầng dưới phục vụ tầng trên.",
        "explanation": {
            "summary": "Kiến trúc phân tầng (Layered Architecture) tổ chức hệ thống thành các tầng thứ bậc (hierarchy of layers), trong đó mỗi tầng cung cấp dịch vụ cho tầng ngay trên nó và sử dụng dịch vụ của tầng ngay dưới nó.",
            "breakdown": {
                "A": "Sai: Client-Server tổ chức theo mô hình yêu cầu/phản hồi giữa các máy trạm và máy chủ.",
                "B": "ĐÚNG: Định nghĩa chuẩn của Layered Architecture: tổ chức theo phân cấp các lớp (hierarchy of layers).",
                "C": "Sai: P2P là kiến trúc mạng ngang hàng bình đẳng.",
                "D": "Sai: Pipe-and-Filter là kiến trúc xử lý tuần tự dữ liệu qua các bộ lọc."
            }
        },
        "topic": "Architectural Styles"
    },
    {
        "id": 36,
        "image": "../Quiz1/Q36.webp",
        "question": "Which software quality attribute focuses on the ease of correcting faults and modifying the system after deployment?",
        "options": [
            {
                "key": "A",
                "text": "Scalability"
            },
            {
                "key": "B",
                "text": "Maintainability"
            },
            {
                "key": "C",
                "text": "Performance"
            },
            {
                "key": "D",
                "text": "Security"
            }
        ],
        "answer": "B",
        "hint": "Thuộc tính đo lường sự thuận tiện khi sửa lỗi (correcting faults) và cập nhật hệ thống sau khi đã phát hành.",
        "explanation": {
            "summary": "Maintainability (Khả năng bảo trì) là thuộc tính chất lượng phần mềm đo lường mức độ dễ dàng, thuận tiện trong việc tìm kiếm, sửa lỗi và thực hiện các thay đổi, mở rộng hệ thống sau khi đã triển khai vào thực tế.",
            "breakdown": {
                "A": "Sai: Scalability tập trung vào khả năng mở rộng khi khối lượng tải gia tăng.",
                "B": "ĐÚNG: Maintainability trực tiếp phản ánh độ thuận tiện khi sửa lỗi (correcting faults) và cập nhật hệ thống.",
                "C": "Sai: Performance đo lường tốc độ phản hồi và tài nguyên tiêu thụ.",
                "D": "Sai: Security tập trung vào việc bảo vệ hệ thống trước các mối đe dọa và truy cập trái phép."
            }
        },
        "topic": "Software Quality Attributes"
    },
    {
        "id": 37,
        "image": "../Quiz1/Q37.webp",
        "question": "Which of the following best describes an “abstract class” in UML?",
        "options": [
            {
                "key": "A",
                "text": "A class that cannot be instantiated and may contain abstract operations"
            },
            {
                "key": "B",
                "text": "A class that has no attributes"
            },
            {
                "key": "C",
                "text": "A class with only static methods"
            },
            {
                "key": "D",
                "text": "A class defined without associations"
            }
        ],
        "answer": "A",
        "hint": "Lớp này không thể dùng toán tử `new` để tạo đối tượng trực tiếp và thường chứa các phương thức chưa có mã cài đặt.",
        "explanation": {
            "summary": "Trong UML và lập trình hướng đối tượng, Abstract Class (lớp trừu tượng) là lớp không thể khởi tạo trực tiếp thành đối tượng (cannot be instantiated), dùng làm khuôn mẫu chung và có thể chứa các thao tác trừu tượng (abstract operations) để các lớp con ghi đè hiện thực.",
            "breakdown": {
                "A": "ĐÚNG: Định nghĩa chuẩn xác: không thể khởi tạo trực tiếp và có thể chứa các abstract operations.",
                "B": "Sai: Abstract class hoàn toàn có thể có thuộc tính bình thường.",
                "C": "Sai: Lớp chỉ chứa static methods thường là Utility Class, không phải abstract class.",
                "D": "Sai: Abstract class có thể tham gia vào bất kỳ mối quan hệ association nào trong mô hình."
            }
        },
        "topic": "UML Class Modeling"
    },
    {
        "id": 38,
        "image": "../Quiz1/Q38.webp",
        "question": "What is the primary goal of using COMET in software design?",
        "options": [
            {
                "key": "A",
                "text": "Increase database performance"
            },
            {
                "key": "B",
                "text": "Provide structured architectural modeling"
            },
            {
                "key": "C",
                "text": "Eliminate the need for state charts"
            },
            {
                "key": "D",
                "text": "Enforce strict coding conventions"
            }
        ],
        "answer": "B",
        "hint": "COMET (Concurrent Object Modeling and Architectural Design Method) mang lại phương pháp mô hình hóa kiến trúc có cấu trúc bài bản.",
        "explanation": {
            "summary": "Mục tiêu trọng tâm của phương pháp COMET do Hassan Gomaa phát triển là cung cấp một quy trình mô hình hóa kiến trúc và thiết kế hướng đối tượng có cấu trúc chặt chẽ (Provide structured architectural modeling), đặc biệt mạnh mẽ trong việc phân rã hệ thống đồng thời, thời gian thực và phân tán.",
            "breakdown": {
                "A": "Sai: COMET là phương pháp thiết kế phần mềm, không phải công cụ tối ưu cơ sở dữ liệu.",
                "B": "ĐÚNG: Cung cấp phương pháp mô hình hóa kiến trúc có cấu trúc (Provide structured architectural modeling).",
                "C": "Sai: Ngược lại, Statechart là một thành phần rực rỡ và cực kỳ trọng yếu trong COMET.",
                "D": "Sai: COMET tập trung ở mức mô hình hóa kiến trúc và thiết kế, không phải là công cụ bắt buộc quy ước viết mã (coding conventions)."
            }
        },
        "topic": "COMET Method"
    },
    {
        "id": 39,
        "image": "../Quiz1/Q39.webp",
        "question": "What is the focus of subsystem architectural design?",
        "options": [
            {
                "key": "A",
                "text": "The transition from analysis to design"
            },
            {
                "key": "B",
                "text": "The design of user interfaces"
            },
            {
                "key": "C",
                "text": "The implementation of individual classes"
            },
            {
                "key": "D",
                "text": "The structuring of the system into subsystems"
            }
        ],
        "answer": "D",
        "hint": "Trọng tâm của thiết kế kiến trúc hệ thống con nằm ngay ở cụm từ 'structuring of the system into subsystems'.",
        "explanation": {
            "summary": "Trong thiết kế kiến trúc theo COMET, Subsystem Architectural Design tập trung trực tiếp vào việc cấu trúc toàn bộ hệ thống phần mềm thành các hệ thống con (The structuring of the system into subsystems) độc lập, xác định rõ biên giới và cách thức các subsystem kết nối với nhau.",
            "breakdown": {
                "A": "Sai: Đây là bước chuyển giai đoạn chung của quy trình, không phải trọng tâm cụ thể của thiết kế subsystem.",
                "B": "Sai: Thiết kế giao diện thuộc về UI design.",
                "C": "Sai: Cài đặt từng lớp thuộc về Detailed Design / Implementation.",
                "D": "ĐÚNG: Trọng tâm chính là việc cấu trúc hệ thống thành các hệ thống con (The structuring of the system into subsystems)."
            }
        },
        "topic": "Subsystem Architectural Design"
    },
    {
        "id": 40,
        "image": "../Quiz1/Q40.webp",
        "question": "What is the primary focus of software subsystem architecture design?",
        "options": [
            {
                "key": "A",
                "text": "To partition the system into manageable, reusable modules"
            },
            {
                "key": "B",
                "text": "To eliminate object-oriented design dependencies"
            },
            {
                "key": "C",
                "text": "To simplify use case modeling"
            },
            {
                "key": "D",
                "text": "To reduce the need for UML diagrams"
            }
        ],
        "answer": "A",
        "hint": "Mục đích chia nhỏ hệ thống thành các subsystem là để phân tách bài toán lớn thành các mô-đun vừa sức quản lý và có thể tái sử dụng.",
        "explanation": {
            "summary": "Mục tiêu cơ bản nhất của việc thiết kế kiến trúc phân hệ (Subsystem Architecture Design) là phân rã một hệ thống lớn, phức tạp thành các khối mô-đun có kích thước phù hợp, dễ quản lý và có khả năng tái sử dụng (partition the system into manageable, reusable modules).",
            "breakdown": {
                "A": "ĐÚNG: Phân vùng hệ thống thành các mô-đun dễ quản lý và có khả năng tái sử dụng (manageable, reusable modules).",
                "B": "Sai: Không thể triệt tiêu hoàn toàn phụ thuộc; mục tiêu là quản lý và giảm thiểu phụ thuộc hợp lý.",
                "C": "Sai: Use case modeling diễn ra ở giai đoạn phân tích yêu cầu trước đó.",
                "D": "Sai: Thiết kế kiến trúc subsystem tận dụng biểu đồ UML rất nhiều, không nhằm giảm bớt UML."
            }
        },
        "topic": "Subsystem Architectural Design"
    },
    {
        "id": 41,
        "image": "../Quiz1/Q41.webp",
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
        "hint": "Căn cứ chuẩn theo giáo trình Software Modeling and Design (Hassan Gomaa) Chương 14: Designing Object-Oriented Software Architectures.",
        "explanation": {
            "summary": "Đáp án chính xác theo đáp án chính thức của tác giả Hassan Gomaa (Chương 14: Designing Object-Oriented Software Architectures, Câu 1): \"A passive object that encapsulates data\".",
            "breakdown": {
                "A": "Sai: An active object that encapsulates data. Lựa chọn này không phản ánh đúng định nghĩa/khái niệm của giáo trình.",
                "B": "ĐÚNG: A passive object that encapsulates data. Khẳng định chuẩn xác theo giáo trình của Hassan Gomaa.",
                "C": "Sai: A class that encapsulates data. Lựa chọn này không phản ánh đúng định nghĩa/khái niệm của giáo trình.",
                "D": "Sai: A task that encapsulates data. Lựa chọn này không phản ánh đúng định nghĩa/khái niệm của giáo trình."
            }
        },
        "topic": "Object-Oriented Concepts (COMET)"
    },
    {
        "id": 42,
        "image": "../Quiz1/Q42.webp",
        "question": "What is a UML package?",
        "options": [
            {
                "key": "A",
                "text": "A box"
            },
            {
                "key": "B",
                "text": "A grouping of classes"
            },
            {
                "key": "C",
                "text": "A grouping of use cases"
            },
            {
                "key": "D",
                "text": "A grouping of model elements"
            }
        ],
        "answer": "D",
        "hint": "Package trong UML là cơ chế tổng quát dùng để gom nhóm bất kỳ phần tử mô hình (model elements) nào, không chỉ riêng classes hay use cases.",
        "explanation": {
            "summary": "Trong chuẩn UML, một Package (gói) là một cơ chế tổ chức mô hình có mục đích chung, được dùng để gom nhóm các phần tử mô hình (model elements) bất kỳ (bao gồm classes, use cases, components, diagrams, và cả các sub-packages khác).",
            "breakdown": {
                "A": "Sai: 'A box' chỉ là hình vẽ biểu diễn trực quan, không phải định nghĩa bản chất kỹ thuật.",
                "B": "Sai: Package có thể nhóm nhiều thứ khác ngoài classes, nên phát biểu này chưa đầy đủ.",
                "C": "Sai: Tương tự, use cases chỉ là một loại phần tử mô hình có thể được chứa trong package.",
                "D": "ĐÚNG: Định nghĩa chuẩn và tổng quát nhất trong UML: 'A grouping of model elements'."
            }
        },
        "topic": "UML Fundamentals"
    },
    {
        "id": 43,
        "image": "../Quiz1/Q43.webp",
        "question": "Why is it important to document a design pattern’s Consequences in the GoF template?",
        "options": [
            {
                "key": "A",
                "text": "To list UML symbols used"
            },
            {
                "key": "B",
                "text": "To describe trade-offs, impact on flexibility, reusability, and potential liabilities of using the pattern"
            },
            {
                "key": "C",
                "text": "To replace the need for code implementation"
            },
            {
                "key": "D",
                "text": "To ensure automatic generation of test cases"
            }
        ],
        "answer": "B",
        "hint": "Mục Consequences trong mẫu thiết kế GoF mô tả những đánh đổi (trade-offs) và hệ quả khi áp dụng mẫu.",
        "explanation": {
            "summary": "Trong mẫu đặc tả GoF, phần Consequences làm rõ các đánh đổi kỹ thuật, tác động đến tính linh hoạt, khả năng tái sử dụng cũng như các chi phí/trách nhiệm phát sinh khi chọn mẫu.",
            "breakdown": {
                "A": "Sai: Ký hiệu UML được mô tả trong phần Structure.",
                "B": "ĐÚNG: Mô tả trade-offs, tác động đến tính linh hoạt, khả năng tái sử dụng và hạn chế tiềm ẩn.",
                "C": "Sai: Không thay thế việc viết code cài đặt.",
                "D": "Sai: Không dùng để tự động sinh test case."
            }
        },
        "topic": "Design Patterns (GoF)"
    },
    {
        "id": 44,
        "image": "../Quiz1/Q44.webp",
        "question": "What is a control task?",
        "options": [
            {
                "key": "A",
                "text": "A task that control other module"
            },
            {
                "key": "B",
                "text": "A task that executes a statechart"
            },
            {
                "key": "C",
                "text": "A task that executes on command"
            },
            {
                "key": "D",
                "text": "A task that controls I/O service"
            }
        ],
        "answer": "B",
        "hint": "Gợi ý: Căn cứ theo nguyên lý kiến trúc chuẩn trong Hassan Gomaa Ch 18 (Concurrent & Real-Time).",
        "explanation": {
            "summary": "Control task là tác vụ thực thi một biểu đồ trạng thái (statechart).",
            "breakdown": {
                "A": "Sai: A task that control other module. Không phù hợp với nguyên lý thiết kế.",
                "B": "ĐÚNG: A task that executes a statechart. Khẳng định chuẩn xác theo Hassan Gomaa Ch 18 (Concurrent & Real-Time).",
                "C": "Sai: A task that executes on command. Không phù hợp với nguyên lý thiết kế.",
                "D": "Sai: A task that controls I/O service. Không phù hợp với nguyên lý thiết kế."
            }
        },
        "topic": "Concurrent Task Structuring (COMET)"
    },
    {
        "id": 45,
        "image": "../Quiz1/Q45.webp",
        "question": "In UML, what is the purpose of a \"composite structure diagram\"?",
        "options": [
            {
                "key": "A",
                "text": "To represent the static structure of a system's classes and their relationships."
            },
            {
                "key": "B",
                "text": "To illustrate the interactions and collaborations between objects in a system."
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
        "answer": "C",
        "hint": "Biểu đồ này đi sâu vào cấu trúc nội tại bên trong của MỘT phân loại (classifier), ví dụ các cổng (ports), bộ phận (parts) và đầu nối (connectors).",
        "explanation": {
            "summary": "Composite Structure Diagram trong UML 2 được thiết kế để mô hình hóa cấu trúc nội bộ, các cổng và sự tổ chức phối hợp của các bộ phận (parts/objects) bên trong một bộ phân loại duy nhất (within a single classifier, chẳng hạn như một component phức hợp hoặc một lớp cộng tác).",
            "breakdown": {
                "A": "Sai: Mô tả cấu trúc tĩnh của các lớp và quan hệ trong toàn hệ thống là nhiệm vụ của Class Diagram.",
                "B": "Sai: Mô tả tương tác giữa các đối tượng theo kịch bản là Interaction Diagram (Sequence / Communication).",
                "C": "ĐÚNG: Định nghĩa chuẩn UML 2: 'To model the organization and behavior of objects within a single classifier'.",
                "D": "Sai: Phân chia theo trạng thái và chuyển đổi trạng thái là State Machine Diagram."
            }
        },
        "topic": "UML Structure Diagrams"
    },
    {
        "id": 46,
        "image": "../Quiz1/Q46.webp",
        "question": "Which concept is fundamental when establishing associations between objects in a class diagram?",
        "options": [
            {
                "key": "A",
                "text": "Data types"
            },
            {
                "key": "B",
                "text": "Use case names"
            },
            {
                "key": "C",
                "text": "Multiplicity"
            },
            {
                "key": "D",
                "text": "Transition triggers"
            }
        ],
        "answer": "C",
        "hint": "Chỉ số này xác định số lượng thể hiện (ví dụ: 1..*, 0..1) có thể liên kết với một thể hiện của lớp đối ứng.",
        "explanation": {
            "summary": "Khi xây dựng quan hệ liên kết (Association) trong Class Diagram, Multiplicity (Bản số / Bội số liên kết, ví dụ: 1, 0..1, 1..*, *) là khái niệm nền tảng quy định số lượng đối tượng của lớp này có thể liên hệ với một đối tượng của lớp kia.",
            "breakdown": {
                "A": "Sai: Data types dùng để định kiểu cho thuộc tính hoặc tham số hàm.",
                "B": "Sai: Use case names thuộc về Use Case Diagram.",
                "C": "ĐÚNG: Multiplicity là yếu tố nền tảng định lượng mối quan hệ liên kết giữa các lớp/đối tượng.",
                "D": "Sai: Transition triggers thuộc về Statechart Diagram."
            }
        },
        "topic": "UML Class Modeling"
    },
    {
        "id": 47,
        "image": "../Quiz1/Q47.webp",
        "question": "Which phase focuses on defining how software elements fit together and interact to meet requirements?",
        "options": [
            {
                "key": "A",
                "text": "Requirement gathering"
            },
            {
                "key": "B",
                "text": "Software architecture design"
            },
            {
                "key": "C",
                "text": "User interface design"
            },
            {
                "key": "D",
                "text": "Testing and validation"
            }
        ],
        "answer": "B",
        "hint": "Giai đoạn định hình cấu trúc bộ khung, xác định các phần tử phần mềm kết nối và phối hợp với nhau như thế nào.",
        "explanation": {
            "summary": "Giai đoạn Thiết kế kiến trúc phần mềm (Software Architecture Design) đóng vai trò quyết định cấu trúc tổng thể: xác định cách thức các phần tử phần mềm liên kết với nhau (fit together) và tương tác qua lại để hiện thực hóa các yêu cầu đã đề ra.",
            "breakdown": {
                "A": "Sai: Thu thập yêu cầu chỉ tìm hiểu khách hàng muốn gì, chưa thiết kế cấu trúc phần mềm.",
                "B": "ĐÚNG: Software architecture design trực tiếp định nghĩa cách các thành phần phần mềm liên kết và tương tác.",
                "C": "Sai: Thiết kế giao diện chỉ tập trung vào màn hình trải nghiệm người dùng.",
                "D": "Sai: Kiểm thử diễn ra sau khi đã thiết kế và lập trình để kiểm tra độ tin cậy."
            }
        },
        "topic": "Software Architecture Fundamentals"
    },
    {
        "id": 48,
        "image": "../Quiz1/Q48.webp",
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
        "answer": "C",
        "hint": "Căn cứ chuẩn theo giáo trình Software Modeling and Design (Hassan Gomaa) Chương 9: Dynamic Interaction Modeling.",
        "explanation": {
            "summary": "Đáp án chính xác theo đáp án chính thức của tác giả Hassan Gomaa (Chương 9: Dynamic Interaction Modeling, Câu 6): \"Depicts all possible interactions among objects\".",
            "breakdown": {
                "A": "Sai: Depicts several objects interacting with each other. Lựa chọn này không phản ánh đúng định nghĩa/khái niệm của giáo trình.",
                "B": "Sai: Depicts one possible sequence of interactions among objects. Lựa chọn này không phản ánh đúng định nghĩa/khái niệm của giáo trình.",
                "C": "ĐÚNG: Depicts all possible interactions among objects. Khẳng định chuẩn xác theo giáo trình của Hassan Gomaa.",
                "D": "Sai: Depicts all classes and their associations with each other. Lựa chọn này không phản ánh đúng định nghĩa/khái niệm của giáo trình."
            }
        },
        "topic": "UML Interaction Diagrams"
    },
    {
        "id": 49,
        "image": "../Quiz1/Q49.webp",
        "question": "Which modeling artifact defines the static structure of the system in OO analysis?",
        "options": [
            {
                "key": "A",
                "text": "Statechart"
            },
            {
                "key": "B",
                "text": "Class diagram"
            },
            {
                "key": "C",
                "text": "Activity diagram"
            },
            {
                "key": "D",
                "text": "Deployment diagram"
            }
        ],
        "answer": "B",
        "hint": "Biểu đồ tĩnh kinh điển nhất trong phân tích hướng đối tượng biểu diễn các lớp và mối liên kết.",
        "explanation": {
            "summary": "Trong phân tích hướng đối tượng (OO Analysis), Class Diagram (biểu đồ lớp) là sản phẩm mô hình hóa tiêu chuẩn định nghĩa cấu trúc tĩnh (static structure) của hệ thống, thể hiện các lớp, thuộc tính, phương thức và các mối quan hệ tĩnh giữa chúng.",
            "breakdown": {
                "A": "Sai: Statechart là mô hình động (dynamic model) biểu diễn trạng thái của đối tượng.",
                "B": "ĐÚNG: Class Diagram là hiện vật chính xác định cấu trúc tĩnh của hệ thống trong OOA.",
                "C": "Sai: Activity diagram là mô hình động mô tả luồng công việc / luồng dữ liệu.",
                "D": "Sai: Deployment diagram mô tả cấu hình vật lý tại giai đoạn thiết kế/triển khai."
            }
        },
        "topic": "Object-Oriented Analysis"
    },
    {
        "id": 50,
        "image": "../Quiz1/Q50.webp",
        "question": "What does “scalability” in architecture refer to?",
        "options": [
            {
                "key": "A",
                "text": "Ability to handle increasing load"
            },
            {
                "key": "B",
                "text": "Ability to be portable across platforms"
            },
            {
                "key": "C",
                "text": "Security to protect resources"
            },
            {
                "key": "D",
                "text": "Speed of algorithm"
            }
        ],
        "answer": "A",
        "hint": "Khả năng mở rộng (scalability) phản ánh năng lực hệ thống tiếp tục vận hành ổn định khi lượng người dùng hoặc tải công việc tăng cao.",
        "explanation": {
            "summary": "Scalability (Khả năng mở rộng) trong kiến trúc phần mềm đề cập đến năng lực của hệ thống thích ứng và xử lý hiệu quả khối lượng tải công việc ngày càng gia tăng (Ability to handle increasing load) mà không làm suy giảm hiệu năng nghiêm trọng.",
            "breakdown": {
                "A": "ĐÚNG: Khả năng xử lý tải gia tăng (Ability to handle increasing load).",
                "B": "Sai: Khả năng chạy trên nhiều nền tảng gọi là Portability (Tính khả chuyển).",
                "C": "Sai: Bảo vệ tài nguyên gọi là Security (Tính bảo mật).",
                "D": "Sai: Tốc độ thuật toán là Performance/Efficiency."
            }
        },
        "topic": "Software Quality Attributes"
    },
    {
        "id": 51,
        "image": "../Quiz1/Q51.webp",
        "question": "What can an inclusion use case be used for?",
        "options": [
            {
                "key": "A",
                "text": "To describe an inclusive use case"
            },
            {
                "key": "B",
                "text": "To describe a lengthy interaction with an actor"
            },
            {
                "key": "C",
                "text": "To describe a use case that includes other use cases"
            }
        ],
        "answer": "A",
        "hint": "Căn cứ chuẩn theo giáo trình Software Modeling and Design (Hassan Gomaa) Chương 6: Use Case Modeling.",
        "explanation": {
            "summary": "Đáp án chính xác theo đáp án chính thức của tác giả Hassan Gomaa (Chương 6: Use Case Modeling, Câu 6): \"To describe an inclusive use case\".",
            "breakdown": {
                "A": "ĐÚNG: To describe an inclusive use case. Khẳng định chuẩn xác theo giáo trình của Hassan Gomaa.",
                "B": "Sai: To describe a lengthy interaction with an actor. Lựa chọn này không phản ánh đúng định nghĩa/khái niệm của giáo trình.",
                "C": "Sai: To describe a use case that includes other use cases. Lựa chọn này không phản ánh đúng định nghĩa/khái niệm của giáo trình."
            }
        },
        "topic": "Use Case Modeling (COMET)"
    },
    {
        "id": 52,
        "image": "../Quiz1/Q52.webp",
        "question": "In object-oriented programming, which keyword is often used to implement information hiding within a class?",
        "options": [
            {
                "key": "A",
                "text": "Public"
            },
            {
                "key": "B",
                "text": "Private"
            },
            {
                "key": "C",
                "text": "Protected"
            },
            {
                "key": "D",
                "text": "Static"
            }
        ],
        "answer": "D",
        "hint": "Gợi ý: Đọc kỹ các từ khóa chuyên ngành trong đề bài và đối chiếu với giáo trình SWD392 và phương pháp COMET của Hassan Gomaa.",
        "explanation": {
            "summary": "Đáp án chính xác là [D]: \"_ Static\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế kiến trúc phần mềm.",
            "breakdown": {
                "A": "Sai: \"Public\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
                "B": "Sai: \"private\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
                "C": "Sai: \"Protected\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
                "D": "ĐÚNG: _ Static. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế."
            }
        },
        "topic": "Object-Oriented Programming"
    },
    {
        "id": 53,
        "image": "../Quiz1/Q53.webp",
        "question": "What is a kernel class in a SPL?",
        "options": [
            {
                "key": "A",
                "text": "An entity class in the SPL"
            },
            {
                "key": "B",
                "text": "A SPL class that stores essential data"
            },
            {
                "key": "C",
                "text": "A class that is required by all members of the SPL"
            },
            {
                "key": "D",
                "text": "An external class to the SPL"
            }
        ],
        "answer": "C",
        "hint": "Căn cứ chuẩn theo giáo trình Software Modeling and Design (Hassan Gomaa) Chương 19: Designing Software Product Line Architectures.",
        "explanation": {
            "summary": "Đáp án chính xác theo đáp án chính thức của tác giả Hassan Gomaa (Chương 19: Designing Software Product Line Architectures, Câu 6): \"A class that is required by all members of the SPL\".",
            "breakdown": {
                "A": "Sai: An entity class in the SPL. Lựa chọn này không phản ánh đúng định nghĩa/khái niệm của giáo trình.",
                "B": "Sai: A SPL class that stores essential data. Lựa chọn này không phản ánh đúng định nghĩa/khái niệm của giáo trình.",
                "C": "ĐÚNG: A class that is required by all members of the SPL. Khẳng định chuẩn xác theo giáo trình của Hassan Gomaa.",
                "D": "Sai: An external class to the SPL. Lựa chọn này không phản ánh đúng định nghĩa/khái niệm của giáo trình."
            }
        },
        "topic": "Software Product Line Engineering"
    },
    {
        "id": 54,
        "image": "../Quiz1/Q54.webp",
        "question": "What does “multiplicity” represent in UML?",
        "options": [
            {
                "key": "A",
                "text": "The number of objects in a relationship."
            },
            {
                "key": "B",
                "text": "The number of classes."
            },
            {
                "key": "C",
                "text": "The number of attributes."
            },
            {
                "key": "D",
                "text": "The number of state transitions."
            }
        ],
        "answer": "A",
        "hint": "Multiplicity xác định có bao nhiêu đối tượng (thể hiện) có thể tham gia vào một đầu của mối quan hệ.",
        "explanation": {
            "summary": "Trong UML, Multiplicity (bản số) biểu diễn số lượng đối tượng/thể hiện (The number of objects/instances) của một lớp có thể tham gia liên kết trong một mối quan hệ với một thể hiện của lớp khác.",
            "breakdown": {
                "A": "ĐÚNG: Biểu thị số lượng đối tượng tham gia trong mối quan hệ (The number of objects in a relationship).",
                "B": "Sai: Không biểu thị tổng số lượng lớp trong sơ đồ.",
                "C": "Sai: Không biểu thị số lượng thuộc tính trong lớp.",
                "D": "Sai: Số lượng chuyển đổi trạng thái thuộc về State Machine."
            }
        },
        "topic": "UML Class Modeling"
    },
    {
        "id": 55,
        "image": "../Quiz1/Q55.webp",
        "question": "What is a server?",
        "options": [
            {
                "key": "A",
                "text": "A hardware/software system that serves customers"
            },
            {
                "key": "B",
                "text": "A subsystem that makes requests and waits for the responses"
            },
            {
                "key": "C",
                "text": "A subsystem that responds to requests from clients"
            },
            {
                "key": "D",
                "text": "A hardware/software system that provides one or more services for multiple clients"
            }
        ],
        "answer": "D",
        "hint": "Căn cứ chuẩn theo giáo trình Software Modeling and Design (Hassan Gomaa) Chương 15: Designing Client/Server Software Architectures.",
        "explanation": {
            "summary": "Đáp án chính xác theo đáp án chính thức của tác giả Hassan Gomaa (Chương 15: Designing Client/Server Software Architectures, Câu 1): \"A hardware/software system that provides one or more services for multiple clients\".",
            "breakdown": {
                "A": "Sai: A hardware/software system that serves customers. Lựa chọn này không phản ánh đúng định nghĩa/khái niệm của giáo trình.",
                "B": "Sai: A subsystem that makes requests and waits for the responses. Lựa chọn này không phản ánh đúng định nghĩa/khái niệm của giáo trình.",
                "C": "Sai: A subsystem that responds to requests from clients. Lựa chọn này không phản ánh đúng định nghĩa/khái niệm của giáo trình.",
                "D": "ĐÚNG: A hardware/software system that provides one or more services for multiple clients. Khẳng định chuẩn xác theo giáo trình của Hassan Gomaa."
            }
        },
        "topic": "Client-Server Architecture (COMET)"
    },
    {
        "id": 56,
        "image": "../Quiz1/Q56.webp",
        "question": "What is a finite state machine?",
        "options": [
            {
                "key": "A",
                "text": "A machine with infinite states"
            },
            {
                "key": "B",
                "text": "A machine with finite states"
            },
            {
                "key": "C",
                "text": "A model of computation"
            },
            {
                "key": "D",
                "text": "A model of system behavior"
            }
        ],
        "answer": "D",
        "hint": "Gợi ý: Căn cứ theo nguyên lý kiến trúc chuẩn trong Hassan Gomaa Ch 10 (Finite State Machines).",
        "explanation": {
            "summary": "Finite state machine là mô hình biểu diễn hành vi của hệ thống (A model of system behavior) qua các trạng thái và chuyển đổi.",
            "breakdown": {
                "A": "Sai: A machine with infinite states. Không phù hợp với nguyên lý thiết kế.",
                "B": "Sai: A machine with finite states. Không phù hợp với nguyên lý thiết kế.",
                "C": "Sai: A model of computation. Không phù hợp với nguyên lý thiết kế.",
                "D": "ĐÚNG: A model of system behavior. Khẳng định chuẩn xác theo Hassan Gomaa Ch 10 (Finite State Machines)."
            }
        },
        "topic": "State Machines & COMET"
    },
    {
        "id": 57,
        "image": "../Quiz1/Q57.webp",
        "question": "What is “black box” testing?",
        "options": [
            {
                "key": "A",
                "text": "System testing"
            },
            {
                "key": "B",
                "text": "Integration testing"
            },
            {
                "key": "C",
                "text": "Testing with knowledge of the system internals"
            },
            {
                "key": "D",
                "text": "Testing without knowledge of the software internals"
            }
        ],
        "answer": "D",
        "hint": "Gợi ý: Căn cứ theo nguyên lý kiến trúc chuẩn trong Hassan Gomaa Ch 3 (Software Testing).",
        "explanation": {
            "summary": "Black box testing là kiểm thử chức năng không cần biết cấu trúc cài đặt bên trong phần mềm.",
            "breakdown": {
                "A": "Sai: System testing. Không phù hợp với nguyên lý thiết kế.",
                "B": "Sai: Integration testing. Không phù hợp với nguyên lý thiết kế.",
                "C": "Sai: Testing with knowledge of the system internals. Không phù hợp với nguyên lý thiết kế.",
                "D": "ĐÚNG: Testing without knowledge of the software internals. Khẳng định chuẩn xác theo Hassan Gomaa Ch 3 (Software Testing)."
            }
        },
        "topic": "Software Testing"
    },
    {
        "id": 58,
        "image": "../Quiz1/Q58.webp",
        "question": "What is an entry action in a state machine?",
        "options": [
            {
                "key": "A",
                "text": "An action that is performed when the state is entered"
            },
            {
                "key": "B",
                "text": "An action that is performed when the state is left"
            },
            {
                "key": "C",
                "text": "An action that starts executing when the state is entered and completes executing when the state is left"
            },
            {
                "key": "D",
                "text": "An action that executes as a result of a state transition"
            }
        ],
        "answer": "A",
        "hint": "Gợi ý: Căn cứ theo nguyên lý kiến trúc chuẩn trong Hassan Gomaa Ch 10 (Finite State Machines).",
        "explanation": {
            "summary": "Entry action là hành động được thực hiện ngay khi bước vào trạng thái đó.",
            "breakdown": {
                "A": "ĐÚNG: An action that is performed when the state is entered. Khẳng định chuẩn xác theo Hassan Gomaa Ch 10 (Finite State Machines).",
                "B": "Sai: An action that is performed when the state is left. Không phù hợp với nguyên lý thiết kế.",
                "C": "Sai: An action that starts executing when the state is entered and completes executing when the state is left. Không phù hợp với nguyên lý thiết kế.",
                "D": "Sai: An action that executes as a result of a state transition. Không phù hợp với nguyên lý thiết kế."
            }
        },
        "topic": "State Machine Actions"
    },
    {
        "id": 59,
        "image": "../Quiz1/Q59.webp",
        "question": "What is the primary focus of architectural design in software development?",
        "options": [
            {
                "key": "A",
                "text": "Detailing class implementations"
            },
            {
                "key": "B",
                "text": "Defining system structure and high-level components"
            },
            {
                "key": "C",
                "text": "Writing test cases"
            },
            {
                "key": "D",
                "text": "Refactoring source code"
            }
        ],
        "answer": "B",
        "hint": "Kiến trúc sư phần mềm tập trung vào việc định hình cấu trúc tổng thể và các thành phần cấp cao thay vì viết code chi tiết từng hàm.",
        "explanation": {
            "summary": "Thiết kế kiến trúc phần mềm tập trung cốt lõi vào việc định nghĩa cấu trúc toàn hệ thống và các thành phần cấp cao (Defining system structure and high-level components), vạch ra bản vẽ chiến lược và ranh giới cho các phân hệ trước khi bước vào lập trình chi tiết.",
            "breakdown": {
                "A": "Sai: Chi tiết hóa cài đặt lớp thuộc về Detailed Design và Coding.",
                "B": "ĐÚNG: Xác định cấu trúc hệ thống và các thành phần cấp cao (Defining system structure and high-level components).",
                "C": "Sai: Viết test case là nhiệm vụ của giai đoạn kiểm thử / QA.",
                "D": "Sai: Tái cấu trúc mã nguồn là hoạt động diễn ra trong quá trình bảo trì và phát triển mã."
            }
        },
        "topic": "Software Architecture Fundamentals"
    },
    {
        "id": 60,
        "image": "../Quiz1/Q60.webp",
        "question": "When is it particularly useful to use the Broker Handle pattern in place of the Broker Forwarding pattern?",
        "options": [
            {
                "key": "A",
                "text": "If the client only communicates with the service once"
            },
            {
                "key": "B",
                "text": "If the client needs to have a dialog with the service"
            },
            {
                "key": "C",
                "text": "If the client knows the type of service required but not the specific service"
            },
            {
                "key": "D",
                "text": "If the client needs to provide the broker with a handle"
            }
        ],
        "answer": "B",
        "hint": "Căn cứ chuẩn theo giáo trình Software Modeling and Design (Hassan Gomaa) Chương 16: Designing Service-Oriented Architectures.",
        "explanation": {
            "summary": "Đáp án chính xác theo đáp án chính thức của tác giả Hassan Gomaa (Chương 16: Designing Service-Oriented Architectures, Câu 6): \"If the client needs to have a dialog with the service\".",
            "breakdown": {
                "A": "Sai: If the client only communicates with the service once. Lựa chọn này không phản ánh đúng định nghĩa/khái niệm của giáo trình.",
                "B": "ĐÚNG: If the client needs to have a dialog with the service. Khẳng định chuẩn xác theo giáo trình của Hassan Gomaa.",
                "C": "Sai: If the client knows the type of service required but not the specific service. Lựa chọn này không phản ánh đúng định nghĩa/khái niệm của giáo trình.",
                "D": "Sai: If the client needs to provide the broker with a handle. Lựa chọn này không phản ánh đúng định nghĩa/khái niệm của giáo trình."
            }
        },
        "topic": "Broker Architectural Patterns (COMET)"
    }
];
