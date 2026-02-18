import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FilmStripBoldProps = Omit<IconBaseProps, 'children'>;

const FilmStripBold = memo(
  forwardRef<SVGSVGElement, FilmStripBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="film-strip-bold" {...props}>
      <path fillRule="evenodd" d="M16.03 2.5q1.02-.01 1.72.04a4 4 0 0 1 1.57.4 4 4 0 0 1 1.74 1.74c.25.49.35 1 .4 1.57q.05.82.04 2.05v7.4q.01 1.23-.04 2.05a4 4 0 0 1-.4 1.57 4 4 0 0 1-1.74 1.74c-.49.25-1 .35-1.57.4q-.7.04-1.72.04H7.97q-1.02.01-1.72-.04a4 4 0 0 1-1.57-.4 4 4 0 0 1-1.74-1.74 4 4 0 0 1-.4-1.57q-.05-.82-.04-2.05V8.3q-.01-1.23.04-2.05a4 4 0 0 1 .4-1.57 4 4 0 0 1 1.74-1.74c.49-.25 1-.35 1.57-.4q.7-.04 1.72-.04h8.06M9 19.5h6V13H9zm-4.46-1.91c.03.44.1.66.18.82q.3.57.87.87c.16.08.38.15.82.18q.26.02.59.03v-2.24H4.52q0 .18.02.34M17 17.25v2.24q.32 0 .59-.03c.44-.03.66-.1.82-.18a2 2 0 0 0 .87-.87c.08-.16.15-.38.18-.82l.02-.34zm0-2h2.5V13H17zm-12.5 0H7V13H4.5zm0-4.25H7V8.75H4.5zM9 11h6V4.5H9zm8 0h2.5V8.75H17zM7 4.51q-.33 0-.59.03c-.44.03-.66.1-.82.18a2 2 0 0 0-.87.87c-.08.16-.15.38-.18.82l-.02.34H7zm10 2.24h2.48q0-.18-.02-.34c-.03-.44-.1-.66-.18-.82a2 2 0 0 0-.87-.87 2 2 0 0 0-.82-.18L17 4.5z" clipRule="evenodd" />
    </IconBase>
  ))
);

FilmStripBold.displayName = 'FilmStripBold';

// Triple export pattern (lucide-react style)
export { FilmStripBold, FilmStripBold as FilmStripBoldIcon, FilmStripBold as SiFilmStripBold };
export default FilmStripBold;
export type { FilmStripBoldProps };
