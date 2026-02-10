import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FolderOpenBoldProps = Omit<IconBaseProps, 'children'>;

const FolderOpenBold = memo(
  forwardRef<SVGSVGElement, FolderOpenBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="folder-open-bold" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M7.67 3.5c.45 0 .83 0 1.2.08q.46.12.87.36c.33.2.6.48.9.8l.13.12c.38.37.46.45.54.5a1 1 0 0 0 .28.11c.1.02.2.03.74.03h3.82q.73 0 1.26.03.54.02 1.08.25a3 3 0 0 1 1.28 1.15q.29.5.38 1.04.1.51.17 1.25l.03.29.32.01q.41.03.85.21l.12.07.17.1q.58.4.82 1.07.18.54.11 1-.04.44-.14 1.02l-.44 2.66q-.17 1.05-.33 1.75c-.12.48-.27.91-.54 1.31a4 4 0 0 1-1.7 1.44q-.65.28-1.38.31-.72.05-1.78.04H7.28q-.95.01-1.6-.04a3 3 0 0 1-1.31-.36 3 3 0 0 1-.53-.38 4 4 0 0 1-1.05-1.16c-.26-.43-.4-.9-.5-1.42q-.11-.74-.22-1.86l-.71-7.16q-.1-.9-.12-1.52c0-.42.03-.85.2-1.27a3 3 0 0 1 1.33-1.46c.4-.22.82-.3 1.25-.34q.62-.04 1.52-.03zm-1.36 8-.25.01-.1.01-.1.09-.04.1-.05.25-.06.38-.6 3.6c-.11.66-.18 1.09-.2 1.42s0 .44.01.49a1 1 0 0 0 .44.52c.05.03.16.07.48.1.33.03.77.03 1.44.03h9.15c.74 0 1.24 0 1.63-.03.37-.03.57-.08.72-.14a2 2 0 0 0 .84-.72c.1-.14.18-.32.27-.69.09-.38.17-.87.3-1.6l.44-2.66a12 12 0 0 0 .12-1 .3.3 0 0 0-.1-.12l-.15-.02q-.25-.03-.86-.02H6.3m-.77-6c-.63 0-1.04 0-1.35.03-.3.02-.41.07-.46.1a1 1 0 0 0-.44.48c-.02.05-.06.16-.05.46s.04.72.1 1.35l.4 4.01.14-.7q.07-.35.3-.73h.01l.09-.12A2 2 0 0 1 5 9.76l.13-.06.2-.08.18-.05h.05l.34-.05q.35-.02.78-.02h11.65v-.05c-.07-.52-.1-.85-.15-1.1a1 1 0 0 0-.12-.37 1 1 0 0 0-.43-.39 1 1 0 0 0-.38-.07c-.26-.02-.6-.02-1.11-.02h-3.82c-.45 0-.83 0-1.2-.08a3 3 0 0 1-.87-.36c-.33-.2-.6-.48-.9-.79l-.13-.13a4 4 0 0 0-.54-.5 1 1 0 0 0-.28-.11c-.1-.02-.2-.03-.74-.03z" clipRule="evenodd" />
    </IconBase>
  ))
);

FolderOpenBold.displayName = 'FolderOpenBold';

// Triple export pattern (lucide-react style)
export { FolderOpenBold, FolderOpenBold as FolderOpenBoldIcon, FolderOpenBold as SiFolderOpenBold };
export default FolderOpenBold;
export type { FolderOpenBoldProps };
