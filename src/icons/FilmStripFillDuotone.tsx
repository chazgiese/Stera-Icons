import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FilmStripFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const FilmStripFillDuotone = memo(
  forwardRef<SVGSVGElement, FilmStripFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="film-strip-fill-duotone" {...props}>
      <path d="M15.13 12.88v6.74H8.87v-6.75zM15.13 4.38v6.75H8.87V4.37z" opacity={0.4} />
        <path fillRule="evenodd" d="M16.88 2.63q.47 0 .86.04.83.04 1.52.38 1.11.57 1.7 1.7.33.68.37 1.5.06.81.05 2.05v7.4q.01 1.24-.05 2.04a4 4 0 0 1-.38 1.52 4 4 0 0 1-1.7 1.7q-.68.33-1.5.37l-.87.04H7.13q-.48 0-.87-.04a4 4 0 0 1-1.52-.38 4 4 0 0 1-1.7-1.7 4 4 0 0 1-.37-1.5q-.06-.81-.04-2.05V8.3q-.01-1.24.04-2.04.04-.83.38-1.52.57-1.11 1.7-1.7.68-.33 1.5-.37l.88-.04zm-8 17h6.24v-6.75H8.89zM4.4 17.6c.04.45.1.69.2.86q.32.61.93.93c.17.1.41.16.86.2l.72.03v-2.5H4.4zm12.47 2.02q.4 0 .72-.03c.45-.04.69-.1.86-.2q.61-.32.93-.93c.1-.17.16-.41.2-.86l.02-.48h-2.73zm-12.5-4.25h2.75v-2.5H4.38zm12.5 0h2.75v-2.5h-2.75zm-12.5-4.24h2.75v-2.5H4.38zm4.5 0h6.24V4.37H8.89zm8 0h2.75v-2.5h-2.75zM7.13 4.38q-.42 0-.73.03c-.45.04-.69.1-.86.2q-.62.32-.93.93c-.1.17-.16.41-.2.86l-.02.47h2.74zm9.75 2.5h2.73l-.02-.48c-.04-.45-.1-.69-.2-.86q-.32-.62-.93-.93a2 2 0 0 0-.86-.2l-.73-.03z" clipRule="evenodd" />
    </IconBase>
  ))
);

FilmStripFillDuotone.displayName = 'FilmStripFillDuotone';

// Triple export pattern (lucide-react style)
export { FilmStripFillDuotone, FilmStripFillDuotone as FilmStripFillDuotoneIcon, FilmStripFillDuotone as SiFilmStripFillDuotone };
export default FilmStripFillDuotone;
export type { FilmStripFillDuotoneProps };
