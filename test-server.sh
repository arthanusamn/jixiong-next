#!/bin/bash

echo "🔍 Testing Next.js server accessibility..."

# Check if server is running
if curl -s -o /dev/null -w "%{http_code}" http://localhost:3000 --connect-timeout 3 | grep -q "200"; then
    echo "✅ Server is running on localhost:3000"
else
    echo "❌ Server NOT accessible on localhost:3000"
fi

if curl -s -o /dev/null -w "%{http_code}" http://127.0.0.1:3000 --connect-timeout 3 | grep -q "200"; then
    echo "✅ Server is running on 127.0.0.1:3000"
else
    echo "❌ Server NOT accessible on 127.0.0.1:3000"
fi

# Check listening ports
echo ""
echo "📊 Network status:"
echo "Listening on port 3000:"
netstat -tlnp 2>/dev/null | grep :3000 || ss -tlnp 2>/dev/null | grep :3000

echo ""
echo "🌐 Try these URLs in your browser:"
echo "1. http://localhost:3000"
echo "2. http://127.0.0.1:3000"
echo "3. http://0.0.0.0:3000"
echo ""
echo "🔄 If none work, try:"
echo "- Clear browser cache"
echo "- Use incognito/private mode"
echo "- Try different browser"
echo "- Restart WSL: wsl --shutdown then reopen"
echo ""
echo "🎵 Server process info:"
ps aux | grep "next dev" | grep -v grep