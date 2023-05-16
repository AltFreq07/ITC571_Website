<template>
    <header align="center">
        <v-container class="pa-1" fluid>
            <v-row>
                <v-spacer />
                <v-col cols="4" class="d-flex justify-center">
                    <h1>SMB Defence</h1>
                </v-col>
                <v-col cols="4" class="d-flex justify-end">
                    <h4>API Status: {{ apiStatus ? 'Online' : 'Offline' }}</h4> <v-badge inline dot
                        :color="apiStatus ? 'success' : 'error'" />
                </v-col>
            </v-row>
        </v-container>
    </header>
    <v-container fluid>
        <v-row class="justify-space-evenly">
            <v-col class="d-flex justify-center">
                <img src="~/assets/img/Logo.png" alt="SMBDefence Logo" height="250" width="250" />
            </v-col>
        </v-row>
        <v-row class="justify-space-evenly">
            <v-col cols="auto" align-self="center">
                <v-card min-height="870" min-width=300 max-width="450">
                    <v-img :src="img1" height="200px" cover></v-img>
                    <v-card-item>
                        <v-card-title class="text-h5 font-weight-black text-wrap">ACSC Windows Hardening<br />Auditor
                        </v-card-title>
                        <v-card-subtitle class="text-wrap">Automated Compliance Assessment & Reporting for Windows 10/11
                            Systems</v-card-subtitle>
                    </v-card-item>
                    <v-divider />
                    <v-container>
                        <v-row>
                            <v-col class="d-flex justify-end">
                                <v-icon icon="mdi-microsoft-windows"></v-icon>
                            </v-col>
                        </v-row>
                    </v-container>
                    <v-divider />
                    <v-card-text>
                        <h3>Pros:</h3>
                        <ul class="text-grey-darken-1">
                            <li>Simple: Easy-to-use script with a straightforward process.</li>
                            <li>No installation required: Just a single click to initiate the hardening check.</li>
                            <li>Time-saving: Quick assessment of device compliance without manual effort.</li>
                            <li>Based on ACSC guidelines: Ensures adherence to Australian Cyber Security Centre's best
                                practices.</li>
                        </ul>
                        <h3>Cons:</h3>
                        <ul class="text-grey-darken-1">
                            <li>Limited output format: Only provides an Excel spreadsheet, which may not suit all users'
                                preferences.</li>
                            <li>Confusing output: The results may require further research to fully understand and
                                interpret.</li>
                            <li>No remediation guidance: The script identifies compliance issues but does not offer
                                solutions or recommendations.</li>
                            <li>System compatibility: Specifically designed for Windows 10/11, may not work on other
                                operating systems or older Windows versions.</li>
                        </ul>
                    </v-card-text>
                    <v-card-actions style="position:absolute;bottom:0;right:0">
                        <v-btn append-icon="mdi-download" variant="tonal" href="./binaries/ACSC_Hardening_Check.exe"
                            download>Download</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
            <v-col cols="auto">
                <v-card min-height="870" min-width=300 max-width="450">
                    <v-img :src="img2" height="200px" cover></v-img>
                    <v-card-item>
                        <v-card-title class="text-h5 font-weight-black text-wrap"> WinPEAS Auto-Scan<br />Assistant

                        </v-card-title>
                        <v-card-subtitle class="text-wrap">Streamlined Privilege Escalation Detection & Reporting for
                            Windows Systems</v-card-subtitle>
                    </v-card-item>
                    <v-divider />
                    <v-container>
                        <v-row>
                            <v-col class="d-flex justify-end">
                                <v-icon icon="mdi-microsoft-windows"></v-icon>
                            </v-col>
                        </v-row>
                    </v-container>
                    <v-divider />
                    <v-card-text>
                        <h3>Pros:</h3>
                        <ul class="text-grey-darken-1">
                            <li>One-click WinPEAS scan: Simple and easy-to-use process for initiating the scan.</li>
                            <li>Uses open-source tools: Leverages trusted and widely-adopted open-source resources.</li>
                            <li>Identifies privilege escalation paths: Reveals potential misconfigurations and
                                vulnerabilities on Windows systems.</li>
                            <li>Proactive security: Helps users identify and address security issues before they are
                                exploited.</li>
                        </ul>
                        <h3>Cons:</h3>
                        <ul class="text-grey-darken-1">
                            <li>Confusing/overwhelming output: The results may be difficult to interpret for users without
                                technical expertise.</li>
                            <li>Platform limitation: Specifically designed for Windows systems, may not work on other
                                operating systems.</li>
                            <li>Requires admin permissions: The program needs elevated privileges, which could pose a
                                security risk or restrict usage for non-admin users.</li>
                            <li>No remediation guidance: The scan identifies potential issues but does not offer solutions
                                or recommendations on how to fix them.</li>
                            <li>Large report size (up to ~300mb)</li>
                        </ul>
                    </v-card-text>
                    <v-card-actions style="position:absolute;bottom:0;right:0">
                        <v-btn append-icon="mdi-download" variant="tonal" download
                            href="./binaries/WinPEAS_Assistant.exe">Download</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
            <v-col cols="auto">
                <v-card min-height="870" min-width=300 max-width="450">
                    <v-img :src="img3" height="200px" cover></v-img>
                    <v-card-item>
                        <v-card-title class="text-h5 font-weight-black text-wrap">Nessus Remote<br />Scanner
                        </v-card-title>
                        <v-card-subtitle class="text-wrap">Streamlined Network Scanning & User-Friendly Results
                            Presentation</v-card-subtitle>
                    </v-card-item>
                    <v-divider />
                    <v-container>
                        <v-row>
                            <v-col class="d-flex justify-start">
                                <v-icon icon="mdi-apple"></v-icon>
                            </v-col>
                            <v-col class="d-flex justify-center">
                                <v-icon icon="mdi-linux"></v-icon>
                            </v-col>
                            <v-col class="d-flex justify-end">
                                <v-icon icon="mdi-microsoft-windows"></v-icon>
                            </v-col>
                        </v-row>
                    </v-container>
                    <v-divider />
                    <v-card-text>
                        <h3>Pros:</h3>
                        <ul class="text-grey-darken-1">
                            <li>Cross-platform compatibility: Supports MacOS, Windows, and Linux systems.</li>
                            <li>Establishes a protected connection to the Nessus server, ensuring data
                                privacy.</li>
                            <li>Generates a PDF report and emails it to the user, streamlining the
                                process.</li>
                            <li>Nessus Professional offers extensive detection
                                capabilities for various security issues.</li>
                            <li>The program handles the connection to the Nessus server, simplifying the process for users.
                            </li>
                            <li>User data is not retained beyond the duration of the scan, ensuring enhanced security and
                                confidentiality.</li>
                        </ul>
                        <h3>Cons:</h3>
                        <ul class="text-grey-darken-1">
                            <li>Requires credentials for comprehensive scans: To perform a complete, credentialed scan, the
                                program needs the user's username and password.
                            </li>
                            <li>Potentially high resource usage: Establishing a secure tunnel and running the remote scan
                                may consume significant system resources.</li>
                        </ul>
                    </v-card-text>
                    <v-card-actions style="position:absolute;bottom:0;right:0">

                        <v-btn v-if="os == 'Mac OS'" append-icon="mdi-download" variant="tonal" download
                            href="./binaries/Nessus_Remote_Scanner_macos.app.zip">Download</v-btn>
                        <v-btn v-else-if="os == 'Linux'" append-icon="mdi-download" variant="tonal" download
                            href="./binaries/Nessus_Remote_Scanner_linux">Download</v-btn>
                        <v-btn v-else="os == 'Windows'" append-icon="mdi-download" variant="tonal" download
                            href="./binaries/Nessus_Remote_Scanner.exe">Download</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
import img1 from '~~/assets/img/1.jpg'
import img2 from '~~/assets/img/2.jpg'
import img3 from '~~/assets/img/3.jpg'

const os = ref('Windows')
const apiStatus = ref(false)

function detectOS() {
    var userAgent = window.navigator.userAgent;
    var platform = window.navigator.platform;
    var macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'];
    var windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'];
    var iosPlatforms = ['iPhone', 'iPad', 'iPod'];
    var os = null;

    if (macosPlatforms.indexOf(platform) !== -1) {
        os = 'Mac OS';
    } else if (iosPlatforms.indexOf(platform) !== -1) {
        os = 'iOS';
    } else if (windowsPlatforms.indexOf(platform) !== -1) {
        os = 'Windows';
    } else if (/Android/.test(userAgent)) {
        os = 'Android';
    } else if (!os && /Linux/.test(platform)) {
        os = 'Linux';
    }
}

function checkAPIStatus() {
    setInterval(() => {
        try {
            fetch('https://webapi.smbdefence.com/status')
                .then(response => response.json())
                .then(data => {
                    data.status == 'online' ? apiStatus.value = true : apiStatus.value = false
                })
        } catch (e) {
            apiStatus.value = false
        }
    }, 60000)
    try {
        fetch('https://webapi.smbdefence.com/status')
            .then(response => response.json())
            .then(data => {
                data.status == 'online' ? apiStatus.value = true : apiStatus.value = false
            })
    } catch (e) {
        apiStatus.value = false
    }
}

onMounted(() => {
    detectOS()
    checkAPIStatus()
})

</script>