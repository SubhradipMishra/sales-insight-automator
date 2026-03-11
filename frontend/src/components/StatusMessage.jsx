const StatusMessage = ({ status }) => {

  if (!status) return null;

  return (
    <div className="mt-4 text-center text-sm text-gray-700">
      {status}
    </div>
  );
};

export default StatusMessage;