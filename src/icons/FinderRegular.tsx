import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FinderRegularProps = Omit<IconBaseProps, 'children'>;

const FinderRegular = memo(
  forwardRef<SVGSVGElement, FinderRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="finder" {...props}>
      <path d="M7.56 7.25c.41 0 .75.34.75.75v1.33a.75.75 0 1 1-1.5 0V8c0-.41.33-.75.75-.75M15.56 7.25c.41 0 .75.34.75.75v1.33a.75.75 0 0 1-1.5 0V8c0-.41.33-.75.75-.75" />
        <path fillRule="evenodd" d="M12.89 3.25q1.79-.02 2.93.06c.8.07 1.46.2 2.06.51 1 .5 1.8 1.3 2.3 2.3q.43.89.5 2.06c.07.8.07 1.77.07 3.02v1.6c0 1.25 0 2.23-.06 3.02a5 5 0 0 1-.51 2.06c-.5 1-1.3 1.8-2.3 2.3q-.89.43-2.06.5a27 27 0 0 1-2.1.07H11.2c-1.25 0-2.23 0-3.02-.06a5 5 0 0 1-2.06-.51c-1-.5-1.8-1.3-2.3-2.3a5 5 0 0 1-.5-2.06c-.07-.8-.07-1.77-.07-3.02v-1.6c0-1.25 0-2.23.06-3.02.07-.8.2-1.46.51-2.06.5-1 1.3-1.8 2.3-2.3a5 5 0 0 1 2.06-.5c.8-.07 1.77-.07 3.02-.07zm-1.69 1.5c-1.27 0-2.18 0-2.9.06-.7.06-1.14.17-1.5.35-.7.36-1.28.93-1.64 1.64-.18.36-.3.8-.35 1.5-.06.72-.06 1.63-.06 2.9v1.6c0 1.27 0 2.18.06 2.9.06.7.17 1.14.35 1.5.36.7.93 1.28 1.64 1.64.36.18.8.3 1.5.35.72.06 1.63.06 2.9.06h1.44a13 13 0 0 1-.57-2.1 8.3 8.3 0 0 1-4.95-1.59.75.75 0 0 1 .88-1.21 7 7 0 0 0 3.85 1.3q-.1-.83-.14-1.83a6 6 0 0 1-1.78-.13l-.3-.07H9.6a.75.75 0 0 1-.55-.91 59 59 0 0 1 1.91-5.86q.48-1.26.82-2.1zm2.02.42-.85 2.2a65 65 0 0 0-1.66 4.92l.14.02q.38.03.75.02.36-.03.5-.11a.75.75 0 0 1 1.1.67q0 1.5.14 2.63A7 7 0 0 0 16 14.35a.75.75 0 0 1 .88 1.21 8 8 0 0 1-3.3 1.44 14 14 0 0 0 .66 2.24q.85 0 1.45-.05c.7-.06 1.15-.17 1.51-.35.7-.36 1.28-.93 1.64-1.64.18-.36.3-.8.35-1.5.06-.72.06-1.63.06-2.9v-1.6c0-1.27 0-2.18-.06-2.9a4 4 0 0 0-.35-1.5 3.8 3.8 0 0 0-1.64-1.64c-.36-.18-.8-.3-1.5-.35q-.88-.07-2.3-.06z" clipRule="evenodd" />
    </IconBase>
  ))
);

FinderRegular.displayName = 'FinderRegular';

// Triple export pattern (lucide-react style)
export { FinderRegular, FinderRegular as FinderRegularIcon, FinderRegular as SiFinderRegular };
export default FinderRegular;
export type { FinderRegularProps };
