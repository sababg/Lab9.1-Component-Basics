import type { UserProfileCardProps } from "../../types";

function UserProfileCard({
  user,
  showEmail = false,
  showRole = false,
  onEdit = () => {},
  children,
}: UserProfileCardProps) {
  return (
    <div className="flex items-center justify-start py-4">
      <div className="border border-gray-300 p-5 w-auto rounded-2xl">
        <div className="flex flex-row gap-20">
          {user.avatarUrl && (
            <div>
              <img src={user.avatarUrl} alt="userAvatar" />
            </div>
          )}
          <div className="gap-3.5 flex flex-col items-start justify-start">
            <p> {user.name}</p>
            {showEmail && <p>{user.email}</p>}
            {showRole && <p> {user.role}</p>}

            <div>{children}</div>
          </div>
        </div>
        <button
          onClick={() => onEdit(user.id)}
          className="border-none bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-800 cursor-pointer w-full mt-4"
        >
          Edit Profile
        </button>
      </div>
    </div>
  );
}

export default UserProfileCard;
