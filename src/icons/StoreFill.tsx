import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type StoreFillProps = Omit<IconBaseProps, 'children'>;

const StoreFill = memo(
  forwardRef<SVGSVGElement, StoreFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="store-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M17.27 3c1.58 0 2.99 1 3.5 2.5l.94 2.74c.21.62.27 1.45-.17 2.18q-.53.85-1.34 1.4V16q.01 1.02-.04 1.72c-.04.48-.12.94-.34 1.37a3.5 3.5 0 0 1-1.53 1.53c-.43.22-.89.3-1.37.34q-.7.05-1.72.04H8.8q-1.02.01-1.72-.04a4 4 0 0 1-1.37-.34 3.5 3.5 0 0 1-1.53-1.53c-.22-.43-.3-.89-.34-1.37q-.05-.7-.04-1.72v-4.18q-.82-.55-1.34-1.4a2.6 2.6 0 0 1-.17-2.18l.94-2.74A3.7 3.7 0 0 1 6.73 3zM12 14.7c-.7 0-1.05 0-1.32.14q-.35.18-.54.54C10 15.65 10 16 10 16.7V19h4v-2.3c0-.7 0-1.05-.14-1.32a1.3 1.3 0 0 0-.54-.54c-.27-.14-.62-.14-1.32-.14M6.73 5a1.7 1.7 0 0 0-1.61 1.15l-.94 2.74c-.09.26-.05.42 0 .49.26.44.63.77 1.03.95a2 2 0 0 0 .62.16l.17.01a2 2 0 0 0 .92-.24l.15-.09a2.6 2.6 0 0 0 1-1.28l.06-.14A1 1 0 0 1 9.3 8.3a1 1 0 0 1 .63.6 2.6 2.6 0 0 0 1.3 1.43 2 2 0 0 0 .93.16 2 2 0 0 0 .9-.32 2.6 2.6 0 0 0 1-1.28l.07-.14a1 1 0 0 1 1.17-.45 1 1 0 0 1 .63.6 2.6 2.6 0 0 0 1.3 1.43 2 2 0 0 0 .77.17 2 2 0 0 0 .79-.17q.62-.27 1.04-.95c.04-.07.08-.23-.01-.49l-.94-2.74A1.7 1.7 0 0 0 17.28 5z" clipRule="evenodd" />
    </IconBase>
  ))
);

StoreFill.displayName = 'StoreFill';

// Triple export pattern (lucide-react style)
export { StoreFill, StoreFill as StoreFillIcon, StoreFill as SiStoreFill };
export default StoreFill;
export type { StoreFillProps };
