import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type FilmStripFillProps = Omit<IconBaseProps, 'children'>;

const FilmStripFill = memo(
  forwardRef<SVGSVGElement, FilmStripFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="film-strip-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M16.53 2q1.02-.01 1.72.04a4 4 0 0 1 1.57.4 4 4 0 0 1 1.74 1.74c.25.49.35 1 .4 1.57q.05.82.04 2.05v8.4q.01 1.23-.04 2.05a4 4 0 0 1-.4 1.57 4 4 0 0 1-1.74 1.74c-.49.25-1 .35-1.57.4q-.7.04-1.72.04H7.47q-1.02.01-1.72-.04a4 4 0 0 1-1.57-.4 4 4 0 0 1-1.74-1.74 4 4 0 0 1-.4-1.57Q2 17.43 2 16.2V7.8q-.01-1.23.04-2.05a4 4 0 0 1 .4-1.57 4 4 0 0 1 1.74-1.74c.49-.25 1-.35 1.57-.4Q6.45 2 7.47 2h9.06M4 17.5q0 .32.03.59c.03.44.1.66.18.82q.3.57.87.87c.16.08.38.15.82.18q.26.02.59.03V17.5zm13.49 0v2.49q.32 0 .59-.03c.44-.03.66-.1.82-.18a2 2 0 0 0 .87-.87c.08-.16.15-.38.18-.82q.02-.27.03-.59zm0-2H20V13h-2.5zM4 15.5h2.5V13H4zM4 11h2.5V8.5H4zm13.5 0H20V8.5h-2.5zm-11-6.99q-.33 0-.59.03c-.44.03-.66.1-.82.18a2 2 0 0 0-.87.87c-.08.16-.15.38-.18.82q-.02.26-.03.59H6.5zm11 2.49h2.49q0-.33-.03-.59c-.03-.44-.1-.66-.18-.82a2 2 0 0 0-.87-.87 2 2 0 0 0-.82-.18L17.5 4z" clipRule="evenodd" />
    </IconBase>
  ))
);

FilmStripFill.displayName = 'FilmStripFill';

// Triple export pattern (lucide-react style)
export { FilmStripFill, FilmStripFill as FilmStripFillIcon, FilmStripFill as SiFilmStripFill };
export type { FilmStripFillProps };
