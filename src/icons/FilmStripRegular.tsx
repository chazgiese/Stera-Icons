import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FilmStripRegularProps = Omit<IconBaseProps, 'children'>;

const FilmStripRegular = memo(
  forwardRef<SVGSVGElement, FilmStripRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="film-strip" {...props}>
      <path fillRule="evenodd" d="M16.03 2.75q1.01-.01 1.7.04c.55.05 1.03.14 1.47.37.7.36 1.28.93 1.64 1.64.23.44.32.92.37 1.47q.05.8.04 2.03v7.4q.01 1.24-.04 2.03a4 4 0 0 1-.37 1.47c-.36.7-.93 1.28-1.64 1.64-.44.23-.92.32-1.47.37q-.69.05-1.7.04H7.97q-1.01.01-1.7-.04a4 4 0 0 1-1.47-.37 3.8 3.8 0 0 1-1.64-1.64 4 4 0 0 1-.37-1.47q-.05-.8-.04-2.03V8.3q-.01-1.24.04-2.03c.05-.55.14-1.03.37-1.47.36-.7.93-1.28 1.64-1.64.44-.23.92-.32 1.47-.37q.68-.05 1.7-.04h8.06m-7.28 17h6.5v-7h-6.5zM4.26 17q0 .34.03.6c.04.46.1.72.2.92q.35.65.99.98c.2.1.46.17.91.21l.86.04V17zm12.49 0v2.75q.5 0 .86-.04c.45-.04.71-.1.91-.2q.65-.34.98-.99c.1-.2.17-.46.21-.91q.02-.27.03-.61zm0-1.5h3v-2.75h-3zm-12.5 0h3v-2.75h-3zm0-4.25h3V8.5h-3zm4.5 0h6.5v-7h-6.5zm8 0h3V8.5h-3zm-9.5-7q-.5 0-.86.04c-.45.04-.71.1-.91.2q-.65.35-.98.99c-.1.2-.17.46-.21.91q-.02.27-.03.61h2.99zM16.75 7h2.99q0-.35-.03-.6a2 2 0 0 0-.2-.92 2.3 2.3 0 0 0-.99-.98 2 2 0 0 0-.91-.21l-.86-.04z" clipRule="evenodd" />
    </IconBase>
  ))
);

FilmStripRegular.displayName = 'FilmStripRegular';

// Triple export pattern (lucide-react style)
export { FilmStripRegular, FilmStripRegular as FilmStripRegularIcon, FilmStripRegular as SiFilmStripRegular };
export default FilmStripRegular;
export type { FilmStripRegularProps };
