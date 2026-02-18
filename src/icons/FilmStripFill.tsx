import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FilmStripFillProps = Omit<IconBaseProps, 'children'>;

const FilmStripFill = memo(
  forwardRef<SVGSVGElement, FilmStripFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="film-strip-fill" {...props}>
      <path fillRule="evenodd" d="M16.03 2.63q1-.01 1.71.04.83.04 1.52.38 1.11.57 1.7 1.7.33.68.37 1.5.06.81.05 2.05v7.4q.01 1.24-.05 2.04a4 4 0 0 1-.38 1.52 4 4 0 0 1-1.7 1.7q-.68.33-1.5.37-.72.05-1.72.04H7.97q-1 .01-1.71-.04a4 4 0 0 1-1.52-.38 4 4 0 0 1-1.7-1.7 4 4 0 0 1-.37-1.5q-.06-.81-.04-2.05V8.3q-.01-1.24.04-2.04.04-.83.38-1.52.57-1.11 1.7-1.7.68-.33 1.5-.37.72-.05 1.72-.04h8.06M4.39 17.13l.02.47c.04.45.1.69.2.86q.32.61.93.93c.17.1.41.16.86.2l.72.03v-2.5zm12.49 0v2.49q.4 0 .72-.03c.45-.04.69-.1.86-.2q.61-.32.93-.93c.1-.17.16-.41.2-.86l.02-.48zm0-1.75h2.75v-2.5h-2.75zm-12.5 0h2.75v-2.5H4.38zm0-4.26h2.75v-2.5H4.38zm12.5 0h2.75v-2.5h-2.75zM7.13 4.39q-.42 0-.73.03c-.45.04-.69.1-.86.2q-.62.32-.93.93c-.1.17-.16.41-.2.86l-.02.47h2.74zm9.75 2.5h2.73l-.02-.48c-.04-.45-.1-.69-.2-.86q-.32-.62-.93-.93a2 2 0 0 0-.86-.2l-.73-.03z" clipRule="evenodd" />
    </IconBase>
  ))
);

FilmStripFill.displayName = 'FilmStripFill';

// Triple export pattern (lucide-react style)
export { FilmStripFill, FilmStripFill as FilmStripFillIcon, FilmStripFill as SiFilmStripFill };
export default FilmStripFill;
export type { FilmStripFillProps };
