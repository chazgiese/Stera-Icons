import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FilmStripBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const FilmStripBoldDuotone = memo(
  forwardRef<SVGSVGElement, FilmStripBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="film-strip-bold-duotone" {...props}>
      <path fillRule="evenodd" d="M15.7 2.5q1.23-.01 2.05.04a4 4 0 0 1 1.57.4 4 4 0 0 1 1.74 1.74c.25.49.35 1 .4 1.57q.05.82.04 2.05v7.4q.01 1.23-.04 2.05a4 4 0 0 1-.4 1.57 4 4 0 0 1-1.74 1.74c-.49.25-1 .35-1.57.4q-.82.05-2.05.04H8.3q-1.23.01-2.05-.04a4 4 0 0 1-1.57-.4 4 4 0 0 1-1.74-1.74 4 4 0 0 1-.4-1.57q-.05-.82-.04-2.05V8.3q-.01-1.23.04-2.05a4 4 0 0 1 .4-1.57 4 4 0 0 1 1.74-1.74c.49-.25 1-.35 1.57-.4q.82-.05 2.05-.04zm-7.4 2c-.86 0-1.44 0-1.89.04-.44.03-.66.1-.82.18a2 2 0 0 0-.87.87c-.08.16-.15.38-.18.82A26 26 0 0 0 4.5 8.3v7.4c0 .86 0 1.44.04 1.89.03.44.1.66.18.82q.3.57.87.87c.16.08.38.15.82.18.45.04 1.03.04 1.89.04h7.4c.86 0 1.44 0 1.89-.04.44-.03.66-.1.82-.18a2 2 0 0 0 .87-.87c.08-.16.15-.38.18-.82.04-.45.04-1.03.04-1.89V8.3c0-.86 0-1.44-.04-1.89-.03-.44-.1-.66-.18-.82a2 2 0 0 0-.87-.87 2 2 0 0 0-.82-.18c-.45-.04-1.03-.04-1.89-.04z" clipRule="evenodd" />
        <path d="M9 4.5V11h6V4.5h2v2.25h2.5v2H17V11h2.5v2H17v2.25h2.5v2H17v2.25h-2V13H9v6.5H7v-2.25H4.5v-2H7V13H4.5v-2H7V8.75H4.5v-2H7V4.5z" opacity={.4} />
    </IconBase>
  ))
);

FilmStripBoldDuotone.displayName = 'FilmStripBoldDuotone';

// Triple export pattern (lucide-react style)
export { FilmStripBoldDuotone, FilmStripBoldDuotone as FilmStripBoldDuotoneIcon, FilmStripBoldDuotone as SiFilmStripBoldDuotone };
export default FilmStripBoldDuotone;
export type { FilmStripBoldDuotoneProps };
