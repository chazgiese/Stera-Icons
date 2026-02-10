import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FilmStripBoldProps = Omit<IconBaseProps, 'children'>;

const FilmStripBold = memo(
  forwardRef<SVGSVGElement, FilmStripBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="film-strip-bold" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M16.08 3q.66 0 1.17.04a4 4 0 0 1 1.57.4 4 4 0 0 1 1.74 1.74c.25.49.35 1 .4 1.57q.05.82.04 2.05v6.4q.01 1.23-.04 2.05a4 4 0 0 1-.4 1.57 4 4 0 0 1-1.74 1.74c-.49.25-1 .35-1.57.4A17 17 0 0 1 16 21H7.92q-.66 0-1.17-.04a4 4 0 0 1-1.57-.4 4 4 0 0 1-1.74-1.74 4 4 0 0 1-.4-1.57Q3 16.43 3 15.2V8.8q-.01-1.23.04-2.05a4 4 0 0 1 .4-1.57 4 4 0 0 1 1.74-1.74c.49-.25 1-.35 1.57-.4A17 17 0 0 1 8 3h8.08M9 19h6v-6H9zm-3.96-1.91c.03.44.1.66.18.82q.3.57.87.87c.16.08.38.15.82.18H7V17H5.03zM17 17v1.97h.09c.44-.04.66-.1.82-.19a2 2 0 0 0 .87-.87c.08-.16.15-.38.18-.82V17zm0-2h2v-2h-2zM5 15h2v-2H5zm0-4h2V9H5zm4 0h6V5H9zm8 0h2V9h-2zM6.91 5.04c-.44.03-.66.1-.82.18a2 2 0 0 0-.87.87c-.08.16-.15.38-.18.82V7H7V5.03zM17 7h1.97v-.09c-.04-.44-.1-.66-.19-.82a2 2 0 0 0-.87-.87 2 2 0 0 0-.82-.18H17z" clipRule="evenodd" />
    </IconBase>
  ))
);

FilmStripBold.displayName = 'FilmStripBold';

// Triple export pattern (lucide-react style)
export { FilmStripBold, FilmStripBold as FilmStripBoldIcon, FilmStripBold as SiFilmStripBold };
export default FilmStripBold;
export type { FilmStripBoldProps };
