export default function App() {
  // 계산기 상태 정의
  const [calculator, setcalculator] = useState(0);
  const [plus, setPlus] = useState(0);
  const [minus, setMinus] = useState(0);

  // 덧셈

  // 뺄셈

  return (
    <div>
      <h1>덧셈과 뺄셈이 가능한 앱 만들기</h1>
      <div>
        <input /> 만큼을 <button>더할게요</button> <button>뺄게요</button>
        <button>초기화</button>
      </div>
      <hr />
      <div>
        <h3>결과</h3>
        <p>0</p>
      </div>
    </div>
  );
}
