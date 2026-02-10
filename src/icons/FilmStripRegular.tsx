import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FilmStripRegularProps = Omit<IconBaseProps, 'children'>;

const FilmStripRegular = memo(
  forwardRef<SVGSVGElement, FilmStripRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="film-strip" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M16.07 3.25q.66 0 1.16.04c.55.05 1.03.14 1.47.37.7.36 1.28.93 1.64 1.64.23.44.32.92.37 1.47q.05.8.04 2.03v6.4q.01 1.24-.04 2.03a4 4 0 0 1-.37 1.47c-.36.7-.93 1.28-1.64 1.64-.44.23-.92.32-1.47.37a16 16 0 0 1-1.23.04H7.92q-.66 0-1.15-.04a4 4 0 0 1-1.47-.37 3.8 3.8 0 0 1-1.64-1.64 4 4 0 0 1-.37-1.47q-.05-.8-.04-2.03V8.8q-.01-1.24.04-2.03c.05-.55.14-1.03.37-1.47.36-.7.93-1.28 1.64-1.64.44-.23.92-.32 1.47-.37A16 16 0 0 1 8 3.25h8.07m-7.32 16h6.5v-6.5h-6.5zM4.79 17.1c.04.45.1.71.2.91q.35.65.99.98c.2.1.46.17.91.21l.36.02v-2.48H4.77q0 .2.02.36m11.96-.36v2.48q.2 0 .36-.02c.45-.04.71-.1.91-.2q.65-.34.98-.99c.1-.2.17-.46.21-.91l.02-.36zm0-1.5h2.5v-2.5h-2.5zm-12 0h2.5v-2.5h-2.5zm0-4h2.5v-2.5h-2.5zm4 0h6.5v-6.5h-6.5zm8 0h2.5v-2.5h-2.5zM6.89 4.79c-.45.04-.71.1-.91.2q-.65.35-.98.99c-.1.2-.17.46-.21.91l-.02.36h2.48V4.77q-.2 0-.36.02m9.86 2.46h2.48q0-.2-.02-.36a2 2 0 0 0-.2-.91 2.3 2.3 0 0 0-.99-.98 2 2 0 0 0-.91-.21l-.36-.02z" clipRule="evenodd" />
    </IconBase>
  ))
);

FilmStripRegular.displayName = 'FilmStripRegular';

// Triple export pattern (lucide-react style)
export { FilmStripRegular, FilmStripRegular as FilmStripRegularIcon, FilmStripRegular as SiFilmStripRegular };
export default FilmStripRegular;
export type { FilmStripRegularProps };
