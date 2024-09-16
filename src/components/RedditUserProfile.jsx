import { useRedditUserInfo } from '../hooks/usegetUserInfo';

function ProfileCard() {
  const { userInfo, loading, error } = useRedditUserInfo();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!userInfo) return null;

  return (
    <main className="flex flex-col overflow-hidden p-6 mx-auto w-full max-w-[480px] md:max-w-[800px] bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl shadow-lg transition-all duration-300 hover:shadow-xl">
      <section className="flex flex-col md:flex-row gap-4 py-4 pr-8 pl-4 text-sm font-medium text-gray-700 bg-white rounded-3xl border border-gray-200 shadow-sm transition-transform transform hover:scale-105">
        <img
          loading="lazy"
          src='https://th.bing.com/th/id/OIP.8CqhYk-Xsj377uERoYrMCgHaEK?w=317&h=180&c=7&r=0&o=5&pid=1.7'
          className="object-cover rounded-md w-[154px] md:w-[200px] h-[154px] md:h-[200px] transition-transform duration-200 hover:scale-105"
          alt={`Profile picture of ${userInfo.username}`}
        />

        <div className="flex flex-col my-auto w-full">
          <h1 className="text-3xl md:text-4xl font-semibold text-gray-900">
            { userInfo.username}
          </h1>
          <dl className="mt-4 space-y-2">
            <div>
              <dt className="text-slate-500">Total Karma</dt>
              <dd className="text-lg text-gray-800">{userInfo.total_karma}</dd>
            </div>

            <div>
              <dt className="text-slate-500">Link Karma</dt>
              <dd className="text-lg text-gray-800">{userInfo.link_karma}</dd>
            </div>

            <div>
              <dt className="text-slate-500">Comment Karma</dt>
              <dd className="text-lg text-gray-800">{userInfo.comment_karma}</dd>
            </div>

            <div>
              <dt className="text-slate-500">Followers</dt>
              <dd className="text-lg text-gray-800">{userInfo.accept_followers ? 'Yes' : 'No'}</dd>
            </div>

            <div>
              <dt className="text-slate-500">Email Verified</dt>
              <dd className="text-lg text-gray-800">{userInfo.has_verified_email ? 'Yes' : 'No'}</dd>
            </div>

            <div>
              <dt className="text-slate-500">Account Created</dt>
              <dd className="text-lg text-gray-800">{new Date(userInfo.created_utc * 1000).toLocaleDateString()}</dd>
            </div>

            <div>
              <dt className="text-slate-500">Premium Status</dt>
              <dd className="text-lg text-gray-800">{userInfo.is_gold ? 'Yes' : 'No'}</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* Section de la bannière et des abonnés */}
      <section className="flex flex-col gap-5 mt-6 bg-white rounded-2xl shadow-sm p-6">
        {userInfo.subreddit?.banner_img && (
          <img
            src={userInfo.subreddit.banner_img}
            alt="Profile banner"
            className="rounded-lg object-cover w-full h-[200px] transition-transform duration-200 hover:scale-105"
          />
        )}
        <div className="flex flex-col">
          <h2 className="self-start font-semibold uppercase text-zinc-500 text-base">
            {userInfo.subreddit?.description || 'No public description'}
          </h2>
          <p className="mt-3 font-medium text-gray-500">
            Subscribers: {userInfo.subreddit?.subscribers || 0}
          </p>
        </div>
      </section>
    </main>
  );
}

export default ProfileCard;
