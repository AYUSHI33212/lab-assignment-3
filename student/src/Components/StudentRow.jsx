const StudentRow = ({ student, updateScore }) => {
  const status = student.score >= 40 ? "Pass" : "Fail";

  return (
    <tr className={status === "Pass" ? "pass" : "fail"}>
      <td>{student.name}</td>
      <td>
        <input
          type="number"
          value={student.score}
          onChange={(e) => updateScore(student.id, e.target.value)}
        />
      </td>
      <td>
        <span className={`badge ${status.toLowerCase()}`}>
          {status}
        </span>
      </td>
    </tr>
  );
};

export default StudentRow;