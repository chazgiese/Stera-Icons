import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type LightbulbBoldProps = Omit<IconBaseProps, 'children'>;

const LightbulbBold = memo(
  forwardRef<SVGSVGElement, LightbulbBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1a7 7 0 0 1 6.24 10.17q-.39.76-.8 1.47-.39.7-.73 1.4a6 6 0 0 0-.71 2.62V19a3 3 0 0 1-2.21 2.9 2 2 0 0 1-3.58 0A3 3 0 0 1 8 19v-2.34c0-.86-.28-1.71-.71-2.63a25 25 0 0 0-.74-1.4q-.4-.7-.79-1.46A7 7 0 0 1 12 1m-2 18a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2h-4zm2-16a5 5 0 0 0-4.46 7.27q.36.66.76 1.4.41.72.8 1.5.4.86.68 1.83h4.44q.27-.98.69-1.83.37-.78.79-1.5.41-.74.76-1.4.52-1.03.54-2.27a5 5 0 0 0-5-5" clipRule="evenodd" />
    </IconBase>
  ))
);

LightbulbBold.displayName = 'LightbulbBold';

export { LightbulbBold };
export type { LightbulbBoldProps };
