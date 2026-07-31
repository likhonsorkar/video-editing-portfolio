export default function Footer({ profile, social, developer }) {
  return (
    <footer className="bg-canvas text-ink pt-16 pb-8 border-t border-blue-line">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid sm:grid-cols-3 gap-10 pb-12 border-b border-blue-line">
          <div>
            <p className="font-display font-semibold text-xl mb-2">{profile.domain}</p>
            <p className="text-ink-soft text-sm leading-relaxed">
              <i className="fas fa-location-dot mr-2 text-blue-soft" />
              {profile.location}
            </p>
          </div>

          <div className="text-sm space-y-2 text-ink-soft">
            <p>
              <i className="fas fa-phone mr-2 text-blue-soft" />
              {profile.phoneDisplay}
            </p>
            <p>
              <i className="fas fa-envelope mr-2 text-blue-soft" />
              {profile.email}
            </p>
            <p>
              <i className="fas fa-droplet mr-2 text-blue-soft" />
              Blood Group: {profile.bloodGroup}
            </p>
          </div>

          <div>
            <p className="text-ink-faint text-xs uppercase tracking-widest mb-3">Follow</p>
            <div className="flex gap-3">
              {social.map((s) => (
                <a
                  key={s.id}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-10 h-10 rounded-full border border-blue-line flex items-center justify-center text-ink-soft hover:bg-blue-soft hover:text-canvas hover:border-blue-soft transition-colors duration-300"
                >
                  <i className={`fab ${s.icon}`} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-ink-faint">
          <p>&copy; {new Date().getFullYear()} {profile.domain} — All Rights Reserved.</p>
          {developer && (
            // <p>
            //   {developer.label}{' '}
            //   <a
            //     href={developer.url}
            //     target="_blank"
            //     rel="noopener noreferrer"
            //     className="text-blue-soft hover:text-blue-bright font-medium transition-colors"
            //   >
            //     {developer.name}
            //   </a>
            // </p>
            <p>
              Developed By {' '}
              <a 
               target="_blank"
               rel="noopener noreferrer"
               className="text-blue-soft hover:text-blue-bright font-medium transition-colors"
               href="https://likhon.com.bd">Likhon.com.bd</a>
            </p>
          )}
        </div>
      </div>
    </footer>
  )
}
