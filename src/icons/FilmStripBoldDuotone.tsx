import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FilmStripBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const FilmStripBoldDuotone = memo(
  forwardRef<SVGSVGElement, FilmStripBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="film-strip-bold-duotone" {...props}>
      <path fill="currentColor" d="M9 5v6h6V5h2v2h2v2h-2v2h2v2h-2v2h2v2h-2v2h-2v-6H9v6H7v-2H5v-2h2v-2H5v-2h2V9H5V7h2V5z" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M15.2 3q1.23-.01 2.05.04a4 4 0 0 1 1.57.4 4 4 0 0 1 1.74 1.74c.25.49.35 1 .4 1.57q.05.82.04 2.05v6.4q.01 1.23-.04 2.05a4 4 0 0 1-.4 1.57 4 4 0 0 1-1.74 1.74c-.49.25-1 .35-1.57.4q-.82.05-2.05.04H8.8q-1.23.01-2.05-.04a4 4 0 0 1-1.57-.4 4 4 0 0 1-1.74-1.74 4 4 0 0 1-.4-1.57Q3 16.43 3 15.2V8.8q-.01-1.23.04-2.05a4 4 0 0 1 .4-1.57 4 4 0 0 1 1.74-1.74c.49-.25 1-.35 1.57-.4Q7.57 3 8.8 3zM8.8 5c-.86 0-1.44 0-1.89.04-.44.03-.66.1-.82.18a2 2 0 0 0-.87.87c-.08.16-.15.38-.18.82A26 26 0 0 0 5 8.8v6.4c0 .86 0 1.44.04 1.89.03.44.1.66.18.82q.3.57.87.87c.16.08.38.15.82.18.45.04 1.03.04 1.89.04h6.4c.86 0 1.44 0 1.89-.04.44-.03.66-.1.82-.18a2 2 0 0 0 .87-.87c.08-.16.15-.38.18-.82.04-.45.04-1.03.04-1.89V8.8c0-.86 0-1.44-.04-1.89-.03-.44-.1-.66-.18-.82a2 2 0 0 0-.87-.87 2 2 0 0 0-.82-.18C16.64 5 16.06 5 15.2 5z" clipRule="evenodd" />
    </IconBase>
  ))
);

FilmStripBoldDuotone.displayName = 'FilmStripBoldDuotone';

// Triple export pattern (lucide-react style)
export { FilmStripBoldDuotone, FilmStripBoldDuotone as FilmStripBoldDuotoneIcon, FilmStripBoldDuotone as SiFilmStripBoldDuotone };
export default FilmStripBoldDuotone;
export type { FilmStripBoldDuotoneProps };
