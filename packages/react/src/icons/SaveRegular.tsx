import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type SaveRegularProps = Omit<IconBaseProps, 'children'>;

const SaveRegular = memo(
  forwardRef<SVGSVGElement, SaveRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M16 3.25c.9 0 1.45 0 1.93.1a4.8 4.8 0 0 1 3.73 3.72c.1.48.09 1.04.09 1.93v4c0 1.39 0 2.47-.07 3.34-.07.88-.22 1.61-.56 2.27a5.8 5.8 0 0 1-2.51 2.51c-.66.34-1.39.49-2.27.56-.87.07-1.95.07-3.34.07h-2c-1.39 0-2.47 0-3.34-.07a6 6 0 0 1-2.27-.56 5.8 5.8 0 0 1-2.51-2.51 6 6 0 0 1-.56-2.27c-.07-.87-.07-1.95-.07-3.34V9c0-.9 0-1.45.1-1.93a4.8 4.8 0 0 1 3.72-3.73c.48-.1 1.04-.09 1.93-.09a.75.75 0 1 1 0 1.5c-.97 0-1.34 0-1.63.06A3.3 3.3 0 0 0 3.8 7.37c-.06.3-.06.67-.06 1.63v4c0 1.41 0 2.43.07 3.22.06.79.18 1.3.4 1.71.4.8 1.05 1.45 1.85 1.86.41.2.92.33 1.7.4.8.06 1.82.06 3.23.06h2c1.41 0 2.43 0 3.22-.07.79-.06 1.3-.18 1.71-.4.8-.4 1.45-1.05 1.86-1.85.2-.41.33-.92.4-1.7.06-.8.06-1.82.06-3.23V9c0-.96 0-1.34-.06-1.63a3.3 3.3 0 0 0-2.56-2.56A10 10 0 0 0 16 4.75a.75.75 0 0 1 0-1.5" />
        <path fill="currentColor" d="M12 2.25c.41 0 .75.34.75.75v10.69l3.72-3.72a.75.75 0 1 1 1.06 1.06l-5 5c-.3.3-.77.3-1.06 0l-5-5a.75.75 0 0 1 1.06-1.06l3.72 3.72V3c0-.41.34-.75.75-.75" />
    </IconBase>
  ))
);

SaveRegular.displayName = 'SaveRegular';

export { SaveRegular };
export type { SaveRegularProps };
