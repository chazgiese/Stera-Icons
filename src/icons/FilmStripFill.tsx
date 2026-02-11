import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FilmStripFillProps = Omit<IconBaseProps, 'children'>;

const FilmStripFill = memo(
  forwardRef<SVGSVGElement, FilmStripFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="film-strip-fill" {...props}>
      <path fillRule="evenodd" d="M15.2 3q1.23-.01 2.05.04a4 4 0 0 1 1.57.4 4 4 0 0 1 1.74 1.74c.25.49.35 1 .4 1.57q.05.82.04 2.05v6.4q.01 1.23-.04 2.05a4 4 0 0 1-.4 1.57 4 4 0 0 1-1.74 1.74c-.49.25-1 .35-1.57.4q-.82.05-2.05.04H8.8q-1.23.01-2.05-.04a4 4 0 0 1-1.57-.4 4 4 0 0 1-1.74-1.74 4 4 0 0 1-.4-1.57Q3 16.43 3 15.2V8.8q-.01-1.23.04-2.05a4 4 0 0 1 .4-1.57 4 4 0 0 1 1.74-1.74c.49-.25 1-.35 1.57-.4Q7.57 3 8.8 3zM5.04 17.09c.03.44.1.66.18.82q.3.57.87.87c.16.08.38.15.82.18l.34.02v-2.23H5.02q0 .18.02.34m11.71-.34v2.23q.18 0 .34-.02c.44-.03.66-.1.82-.18a2 2 0 0 0 .87-.87c.08-.16.15-.38.18-.82l.02-.34zm0-1.5H19v-2.5h-2.25zM5 15.25h2.25v-2.5H5zm0-4h2.25v-2.5H5zm11.75 0H19v-2.5h-2.25zM6.91 5.04c-.44.03-.66.1-.82.18a2 2 0 0 0-.87.87c-.08.16-.15.38-.18.82l-.02.34h2.23V5.02q-.18 0-.34.02m9.84 2.21h2.23q0-.18-.02-.34c-.03-.44-.1-.66-.18-.82a2 2 0 0 0-.87-.87 2 2 0 0 0-.82-.18l-.34-.02z" clipRule="evenodd" />
    </IconBase>
  ))
);

FilmStripFill.displayName = 'FilmStripFill';

// Triple export pattern (lucide-react style)
export { FilmStripFill, FilmStripFill as FilmStripFillIcon, FilmStripFill as SiFilmStripFill };
export default FilmStripFill;
export type { FilmStripFillProps };
