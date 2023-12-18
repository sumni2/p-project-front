const ClassItem = ({ name, startTime, endTime, nextStartTime }) => {
  return (
    <tr class="h-14 border-gray-300 border-b">
      <td class="pl-4">{name}</td>
      <td>
        {startTime} - {endTime}
      </td>
      <td class="text-right pr-4">{nextStartTime}</td>
    </tr>
  );
};

export default ClassItem;
