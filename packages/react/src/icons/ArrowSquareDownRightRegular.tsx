import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ArrowSquareDownRightRegularProps = Omit<IconBaseProps, 'children'>;

const ArrowSquareDownRightRegular = memo(
  forwardRef<SVGSVGElement, ArrowSquareDownRightRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M8.53 7.47a.75.75 0 1 0-1.06 1.06l6.72 6.72H9a.75.75 0 0 0 0 1.5h7c.41 0 .75-.34.75-.75V9a.75.75 0 0 0-1.5 0v5.19z" />
        <path fill="currentColor" fillRule="evenodd" d="M11 2.25c-1.39 0-2.47 0-3.34.07-.88.07-1.61.22-2.27.56a5.8 5.8 0 0 0-2.51 2.51 6 6 0 0 0-.56 2.27c-.07.87-.07 1.95-.07 3.34v2c0 1.39 0 2.47.07 3.34.07.88.22 1.61.56 2.27a5.8 5.8 0 0 0 2.51 2.51c.66.34 1.39.49 2.27.56.87.07 1.95.07 3.34.07h2c1.39 0 2.47 0 3.34-.07.88-.07 1.61-.22 2.27-.56a5.8 5.8 0 0 0 2.51-2.51c.34-.66.49-1.39.56-2.27.07-.87.07-1.95.07-3.34v-2c0-1.39 0-2.47-.07-3.34a6 6 0 0 0-.56-2.27 5.8 5.8 0 0 0-2.51-2.51 6 6 0 0 0-2.27-.56c-.87-.07-1.95-.07-3.34-.07zm2 1.5c1.41 0 2.43 0 3.22.07.79.06 1.3.18 1.71.4.8.4 1.45 1.05 1.86 1.85.2.41.33.92.4 1.7.06.8.06 1.82.06 3.23v2c0 1.41 0 2.43-.07 3.22-.06.79-.18 1.3-.4 1.71-.4.8-1.05 1.45-1.85 1.86-.41.2-.92.33-1.7.4-.8.06-1.82.06-3.23.06h-2c-1.41 0-2.43 0-3.22-.07a5 5 0 0 1-1.71-.4 4.3 4.3 0 0 1-1.86-1.85 5 5 0 0 1-.4-1.7c-.06-.8-.06-1.82-.06-3.23v-2c0-1.41 0-2.43.07-3.22.06-.79.18-1.3.4-1.71.4-.8 1.05-1.45 1.85-1.86.41-.2.92-.33 1.7-.4.8-.06 1.82-.06 3.23-.06z" clipRule="evenodd" />
    </IconBase>
  ))
);

ArrowSquareDownRightRegular.displayName = 'ArrowSquareDownRightRegular';

export { ArrowSquareDownRightRegular };
export type { ArrowSquareDownRightRegularProps };
