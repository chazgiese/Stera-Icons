import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type FinderRegularProps = Omit<IconBaseProps, 'children'>;

const FinderRegular = memo(
  forwardRef<SVGSVGElement, FinderRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="finder" {...props}>
      <path fill="currentColor" d="M7 6.75c.41 0 .75.34.75.75V9a.75.75 0 0 1-1.5 0V7.5c0-.41.34-.75.75-.75M16 6.75c.41 0 .75.34.75.75V9a.75.75 0 0 1-1.5 0V7.5c0-.41.34-.75.75-.75" />
        <path fill="currentColor" fillRule="evenodd" d="M13 2.25c1.39 0 2.47 0 3.34.07.88.07 1.61.22 2.27.56a5.8 5.8 0 0 1 2.51 2.51c.34.66.49 1.39.56 2.27.07.87.07 1.95.07 3.34v2c0 1.39 0 2.47-.07 3.34-.07.88-.22 1.61-.56 2.27a5.8 5.8 0 0 1-2.51 2.51c-.66.34-1.39.49-2.27.56a31 31 0 0 1-2.4.07H11c-1.39 0-2.47 0-3.34-.07a6 6 0 0 1-2.27-.56 5.8 5.8 0 0 1-2.51-2.51 6 6 0 0 1-.56-2.27c-.07-.87-.07-1.95-.07-3.34v-2c0-1.39 0-2.47.07-3.34.07-.88.22-1.61.56-2.27a5.8 5.8 0 0 1 2.51-2.51 6 6 0 0 1 2.27-.56c.87-.07 1.95-.07 3.34-.07zm-2 1.5c-1.41 0-2.43 0-3.22.07-.79.06-1.3.18-1.71.4-.8.4-1.45 1.05-1.86 1.85-.2.41-.33.92-.4 1.7-.06.8-.06 1.82-.06 3.23v2c0 1.41 0 2.43.07 3.22.06.79.18 1.3.4 1.71.4.8 1.05 1.45 1.85 1.86.41.2.92.33 1.7.4.8.06 1.82.06 3.23.06h1.85a14 14 0 0 1-.69-2.55 9.3 9.3 0 0 1-5.6-1.77.75.75 0 0 1 .88-1.21 7.8 7.8 0 0 0 4.5 1.48q-.14-1.02-.17-2.25h-.1a7 7 0 0 1-1.98-.14l-.27-.06-.07-.01-.02-.01h-.01a.75.75 0 0 1-.55-.91c.51-2.05 1.4-4.58 2.15-6.58.37-1 .72-1.86.97-2.49zm2.29.53c-.25.62-.59 1.49-.96 2.48a73 73 0 0 0-1.9 5.65l.27.03q.44.05.86.02t.6-.13a.75.75 0 0 1 1.09.67q0 1.75.18 3.07a8 8 0 0 0 3.13-1.35.75.75 0 0 1 .88 1.21 9 9 0 0 1-3.78 1.62q.15.75.31 1.3.28.94.48 1.37l.01.02q1.04 0 1.76-.06c.79-.06 1.3-.18 1.71-.4.8-.4 1.45-1.05 1.86-1.85.2-.41.33-.92.4-1.7.06-.8.06-1.82.06-3.23v-2c0-1.41 0-2.43-.07-3.22a5 5 0 0 0-.4-1.71 4.3 4.3 0 0 0-1.85-1.86 5 5 0 0 0-1.7-.4 36 36 0 0 0-2.73-.06z" clipRule="evenodd" />
    </IconBase>
  ))
);

FinderRegular.displayName = 'FinderRegular';

// Triple export pattern (lucide-react style)
export { FinderRegular, FinderRegular as FinderRegularIcon, FinderRegular as SiFinderRegular };
export default FinderRegular;
export type { FinderRegularProps };
